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



// Function scope 
// Scope: the location where a variable is defined dictates where we have access to that variable 

function lol(){
    let person = "Tom";
    const age = 45;
    var color = 'teal';
}
// Scope of the varialbes is limited to that function above 
lol(); 
console.log(person) //won't work

// Block scope
if(true){
    let animal= 'eel';
    console.log(animal)
}
// You have access to the variable in the if statement, but not outside of the block (let, const)
// But there is no block scope for var 
console.log(animal);


// Therefore, using var could be problematic sometimes 
let animals = ['grizzly bear', 'panda bear', 'spectacled bear'];
var i = 10;
for(var i = 0; i < animals.length; i++){ 
    console.log(i, animals[i]);
}
console.log(i);
// In this case, the varialbe 'i' is 3 not 10 (potential problem)
// This can be fixed by reaplacing the line of code with for(let i = 0; i < animal.length; i++){ --- }
// scope of i would be changed by using let instead of var  

let i = 10;
for(let i = 0; i < animals.length; i++){ 
    console.log(i, animals[i]);
}
console.log(i)
// This works since let in the for loop is scoped to the loop
// Therefore "i"s outside of the loop and inside of the loop are didferent 

// [1,3,5],
// [2,6,10]
function doubleArr(arr){
    const result = [];
    for(let num of arr){
        let double = num * 2;
        result.push(double);
    }
    console.log(double) // this line will only work when it's var double (but it doesn't work with let double) 
    return result;
}

// Lexical scope
// Inner functions have access to the varialbes in outer functions 
function outer(){
    let hero = 'black panther';

    function inner(){
        let cryForHelp = `${hero}, please save me`
        console.log(cryForHelp);
    }
    inner();
}

function outer() {
    let movie = 'Amadeus';

    function inner() {
        let movie = 'The Shining';
        function extraInner() {
            console.log(movie.toUpperCase());
        } //In this case, movie = the shining It just goes up one level above and find the variable 
    }
    inner();
}


// function expressions
function add(x, y){
    return x + y;
}

// anonymous function 
const sum = function (x,y){
    return x + y;
}

console.dir(sum) // objects 

// named function expression
const product = function multiply(x, y){
    return x * y;
}


// Higher order functions 
// functions that operate on/with other functions. they can: 
// accept other functions as arguments
// return a function

function add(x, y){
    return x + y;
}

const subtract = function(x,y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

const divide = function (x,y){
    return x/y;
}

const operations = [add, subtract, multiply, divide];

for(let func of operations){
    let result = func(30, 5);
    console.log(result);
}

const thing = {
    doSomething: multiply
}
 // thing.doSomething - properties can be accessed this way 

//  thing.doSomething(50, 2);

function callThreeTimes(f){
    f();
    f();
    f();
}

function cry(){
    console.log("boo hoo im so sad");
}

function rage(){
    console.log("i hate everything");
}

callThreeTimes(cry);
// cry is a callback function


function repeatNTimes(action, num){
    for(let i = 0; i < num; i++){
        action()
    }
}

repeatNTimes(cry, 13);

function pickOne(f1, f2){
    let rand = Math.random();
    console.log(rand);

    if(rand < 0.5){
        f1();
    } else {
        f2();
    }
}

pickOne(cry, rage)


// functions as return values 
function multiplyBy(num){
    return function(x) {
        return x * num;
    }
}
// this returns function(x){return x * num}

const triple = multiplyBy(3);
triple(6); // 18
const double = multiplyBy(2);
double(6) // 12


function makeBetweenFunc(x, y){
    return function(num){
        return num >= x && num <= y;
    }
}

const isChild = makeBetweenFunc(0, 18);

isChild(17)

const isNineties = makeBetweenFunc(1000, 1999);

const isNiceWeather = makeBetweenFunc(60, 79);

// Callback function
// a function passed into anpther function as an argument, which is then invoked inside the outer function

function grumps(){
    alert("?");
}

setTimeout(grumps, 5000);

setTimeout(function(){
    alert("welcome!");
}, 5000);


const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    alert("WHY?")   
})

// Hoisting 

console.log(animal);
var animal = 'Tapir';

var aninmal
console.log(animal)
= 'Tapir';

// The two functions above behave the same. This is hoisting 
// JS first runs var animal so console.log(animal) will spit out undefined 
// (undefiend is returned when a declared variable does not have any value)


console.log(shrimp);
let animal = 'Harlequin Shrimp';
// Interestingly, it's not hoisted when a variable is declared with let

howl()
function howl(){
    console.log("AWW");
}
// functions are hoisted 

hoot();
var hoot = function(){
    console.log("hooo hooo");
}
// function expression is not hoisted 

console.log(hoot);
var hoot = function(){
    console.log("hooo hooo");
}
// This is hoisted 


