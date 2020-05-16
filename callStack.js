// Call Stack 
// The mechanism the JS interpreter uses to keep track of its place in a script 
// that calls multiple functions 

// How JS knows what function is currently being run and what functions are called
// from within that function 

const repeat = (str, times) => {
    let result = '';
    for(let i = 0; i < times; i++){
        result += str;
    }
    return result;
}

const scream = (str) => {
    return str.toUpperCase() + "!!!";
}

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 8);
    return rant;
}

const makeRant = (phrase, el) => {
    const h1 = document.createElement('h1'); 
    h1.innerText = getRantText(phrase);
    el.appendChild(h1);
}

makeRant("I hate mayonnaise", document.body);
makeRant('if you have to cough, please cover your mouth', document.body);
// Check callstack 

// JS is a single threaded
// At any given point in time, that single JS thread is running at most one line of JS code 