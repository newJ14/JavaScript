// Ex1. 
function rollDie(){
    let roll = Math.floor(Math,random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls){ //parameter 
    for(let i = 0; i < numRolls; i++){
        rollDie();
    }
}



// Ex2.
function isPurple(color){
    if(color.toLowerCase() === 'purple'){
        return true;
    } else {
        return false;
    }
}

function containsPurple(arr){
    for (let color of arr){
        if (color === 'purple' || color === 'magenta'){
            return true;
        }
    }
    return false;
}


// write a isValidPassword function
// It accepts 2 arguments: pasword and username
// Password must:
// - be at least 8 charactres
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true
// Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr'); true
// isValidPassword('dogLuvr123!', 'dogLuvr'); false 

// My solution
function isValidPassword(password, username){
    if(password.length < 8 || password.includes(username && " ")){
        return false;
    } else {
        return true;
    }
}

// Solution from the lecture 
function isValidPassword(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const tooSimilar = password.indexOf(username) !== -1p
    return !tooShort && !hasSpace && !tooSimilar;
}


// Write a function to find the average value in an array of numbers
// avg([0, 50]) 25
// avg([75, 76, 80, 95, 100]) 85.2

// My solution - it was same as the solution provided in the lecture 
function average(arr){
    let sum = 0;
    for(let element of arr){
        sum += element;
    }

    return sum/arr.length;
}


// A pangram is a sentence that contains every letter of the alphabet, like:
// "The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see 
// if a given sentence contains every letter of the alphabet. Make sure you ignore string casing


// My solution
function isPangram(str){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for(let letter of alphabet){
        if(str.toLowerCase().indexOf(letter) === -1){
            return false;
        }
    }
    return true;
}

// Solution provided in the lecture
function isPangram(sentence){
    let lowerCased = sentence.toLowerCase();
    for(let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!lowerCased.includes(char)){
            return false;
        }
    }
    return true;
}


// Write a getCard() function which returns a random playing card object, like:
// {
//     value: 'K',
//     suit: 'clubs'
// }
//Pick a random value from: 
// 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from:
// clubs, spades, hearts, diamonds
// Return both in an object 

// My solution
function getCard(){
    const value = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    const suit = ['clubs', 'spades', 'hearts', 'diamonds'];
    
    return {'value': value[Math.floor(Math.random() * value.length)], 'suit': suit[Math.floor(Math.random() * suit.length)]}
}

// Solution provided in the lecture - They are basically the same solution 
function pick(arr){
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function getCard(){
    const value = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
    const suit = ['clubs', 'spades', 'hearts', 'diamonds'];

    return {value: pick(value), suit: pick(suit)};

}