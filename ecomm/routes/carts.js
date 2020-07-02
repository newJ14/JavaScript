const express = require('express');
const cartsRepo = require('../repositories/carts');
const productsRepo = require('../repositories/products');
const cartShowTemplate = require('../views/carts/show');

const router = express.Router();

// Receive a post request to add an item to a cart
router.post('/cart/products', async (req, res) => {
    //Figure out the cart
    let cart; 
    if (!req.session.cartId){
        //we do not have a cart, we need to create one 
        // and store the card id on the req.session.cartId
        // property 
        cart = await cartsRepo.create({ items: [] });
        req.session.cartId = cart.id;
    } else {
        //we have a cart! lets get it from the repository
        cart = await cartsRepo.getOne(req.session.cartId);
    }

    const existingItem = cart.items.find(item => item.id === req.body.productId);
    if (existingItem){
        // Increment quantity and save cart 
        existingItem.quantity ++;
    } else {
        // add new product id to items array
        cart.items.push({ id: req.body.productId, quantity: 1});
    }
    await cartsRepo.update(cart.id, {
        items: cart.items
    });

    res.redirect('/cart')
})

// Receive a Get request to show all items in cart (if a user try to access an empty cart)
router.get('/cart', async (req, res) => {
    if(!req.session.cartId){
        return res.redirect('/');
    }

    const cart = await cartsRepo.getOne(req.session.cartId);

    for(let item of cart.items){
        // item === { id:, quantity}
        const product = await productsRepo.getOne(item.id);
        
        //not actually saving the changes. We are just sending the details to the template
        item.product = product;
    }

    res.send(cartShowTemplate({ items: cart.items }));  
});
// Receive a Get request to show all items in a cart

router.post('/cart/products/delete', async (req, res) => {
    const { itemId } = req.body;
    const cart = await cartsRepo.getOne(req.session.cartId);

    const items = cart.items.filter(item => item.id !== itemId);

    await cartsRepo.update(req.session.cartId, { items: items});

    res.redirect('/cart');
});
// Receive a post request to delete an item from a cart

module.exports = router; 
