const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const authRouter = require('./routes/admin/auth');
const productsRouter = require('./routes/admin/products');

const app = express(); 

app.use(express.static('public'));
//make everything in the file avaliable to the world 
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    keys: ['aifhjdpifds2sfg']
}))

app.use(authRouter);
app.use (productsRouter);

app.listen(3000, () => {
    console.log('Listening');
});
//http - default port 80
//https - default port 443


// request (besides localhost) -> DNS Server (hostname - IP Address)

// Repository Approach
// Active Record Approach 

