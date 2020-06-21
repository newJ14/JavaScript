const express = require('express');
const { check, validationResult } = require('express-validator');

const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../views/admin/auth/signup');
const signinTemplate = require('../../views/admin/auth/signin');
const {requireEmail, 
       requirePassword, 
       requirePasswordConfirmation,
       requireEmailExists,
       requireValidPasswordForUser
      } = require('./validators');

const router = express.Router();

router.get('/signup', (req, res) => {
    res.send(signupTemplate({req: req}));
});


// const bodyParser = (req, res, next) => {
//     //get access to email, password, passwordConfirmation 

//     if(req.method === "POST"){

//         req.on('data', data => {
//             const parsed = data.toString('utf8').split('&');
//             const formData = {};
//             for (let pair of parsed){
//                 const [key, value] = pair.split('=');
//                 formData[key] = value;
//             }
//             req.body = formData;
//             next();
//         });
//     } else {
//         next();
//     }
// };


// bodyParser.urlencoded handles html form data 
router.post('/signup', [
    requireEmail,
    requirePassword,
    requirePasswordConfirmation
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()){
        return res.send(signupTemplate({ req, errors }));
    }

    const {email, password, passwordConfirmation} = req.body;


    if(password !== passwordConfirmation){
        return res.send('Passwords must match');
    }

    //Create a user in our user repo to represent this person
    const user = await usersRepo.create({email: email, password: password});

    //store the id of that user inside the users cookie 
    // req.session === {}// Added by cookie session! so we can throw info in it
    req.session.userId = user.id;
    
    res.send('Account Created');
});

// Automatic submission (Search all the input values)
// With post method, submitted data are attached to req.body 
//so they are not displayed in the URL


router.get('/signout', (req, res) => {
    req.session = null;
    res.send('You are logged out!');
});

router.get('/signin', (req, res) => {
    res.send(signinTemplate({}));
});

router.post(
    '/signin', 
    [
        requireEmailExists,
        requireValidPasswordForUser
    ], 
    async(req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.send(signinTemplate({errors: errors}))
    }



    const {email} = req.body;

    const user = await usersRepo.getOneBy({email: email});

    req.session.userId = user.id;

    res.send('You are signed in!');
});


module.exports = router;
