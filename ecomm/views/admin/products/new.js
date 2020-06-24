const layout = require('../layout');
const {getError} = require('../../helpers');

module.exports = ({ errors }) => {
    return layout({
        content: `
            <form method = 'POST' enctype = "multipart/form-data">
                <input placeholder = "Title" name = "title" />
                <input placeholder = "Price" name = "price" />
                <input type = "file" name = "image" />
                <button>Submit</button>
            </form>
        `
    });
};

// enctype = "application/x-www-form-urlencoded" (In the form method default)
// Take this infomration and make it safe to be used inside of the url - urlencoded 
// If you use urlencoded, the file might contain some data that can't be used in the url
// so we need to use another method 

// multipart/form-data" take all the pieces of data out of the form 
// and for each separate input, send each file to the backend server in a different little part 
// Our file contains some data that can't be turned into url 

// Content-Type: Boundary - this means that there is going to be another chunk of data coming behind 