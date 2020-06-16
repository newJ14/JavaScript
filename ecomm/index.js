const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send(`
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
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Account Created');
});

// Automatic submission (Search all the input values)
// With post method, submitted data are attached to req.body 
//so they are not displayed in the URL
app.listen(3000, () => {
    console.log('Listening');
});
//http - default port 80
//https - default port 443


// request (besides localhost) -> DNS Server (hostname - IP Address)

// Repository Approach
// Active Record Approach 

