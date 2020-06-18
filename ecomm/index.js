const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const usersRepo = require('./repositories/users');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({
    keys: ['aifhjdpifds2sfg']
}))

app.get('/signup', (req, res) => {
    res.send(`
    your id is: ${req.session.userId}
    <div>
        <form method = "POST">
            <input name = 'email' placeholder = "email" />
            <input name = 'password' placeholder = "password" />
            <input name = 'passwordConfirmation' placeholder = "password confirmation" />
            <button>Sign Up</button>
        </form>
    </div>
    `)
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
app.post('/signup', async (req, res) => {
    const {email, password, passwordConfirmation} = req.body;

    const existingUser = await usersRepo.getOneBy({email: email});

    if(existingUser){
        return res.send('Email in use');
    }

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


app.get('/signout', (req, res) => {
    req.session = null;
    res.send('You are logged out!');
});

app.get('/signin', (req, res) => {
    res.send(`
    <div>
    <form method = "POST">
        <input name = 'email' placeholder = "email" />
        <input name = 'password' placeholder = "password" />
        <button>Sign In</button>
    </form>
</div>`);
});

app.post('/signin', async(req, res) => {
    const {email, password} = req.body;

    const user = await usersRepo.getOneBy({email: email});

    if (!user){
        return res.send("Email not found");
    }

    const validPassword = await usersRepo.comparePasswords(
        user.password, 
        password
    );
    
    if(!validPassword) {
        return res.send('Invalid password');
    }

    req.session.userId = user.id;

    res.send('You are signed in!');
});



app.listen(3000, () => {
    console.log('Listening');
});
//http - default port 80
//https - default port 443


// request (besides localhost) -> DNS Server (hostname - IP Address)

// Repository Approach
// Active Record Approach 

