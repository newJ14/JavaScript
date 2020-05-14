// Default parameters
function multiply(x,y) {
    if(typeof y === 'undefined'){
        y = 1;
    }
    return x * y;
}

function multiply(x, y){
    y = typeof y === 'undefiend' ? 1 : y;
    return x * y;
}


function multiply(x, y=1){ // if y value is not given, y = 1 will be used as a default value 
    // you can pass in any value such as string or array 
    return x * y;
}


// Spread 
// Spread syntax allows an iterable such as an array to be expanded in places 
// where zero or more arguments (for function calls) or elements (for array literals) are expected, 
// or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected. 

// Math.max([1,2,3,4,5]) -> This does not work since it considers an array as a single argument 
// Math.max(...[1,2,3,4,5]) -> ... will spread the iterable into an individual argument 

const colors = ['red', 'orange', 'yellow', 'green']
const str = "GOAT" // String is iterable 

function giveMeFour(a,b,c,d){
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}
giveMeFour(...colors)
giveMeFour(...str) 

const fruits = ['apple', 'grape', 'peach']
const vegetable = ['cucumber', 'pepper', 'lettuce']

const food = [...fruits, ...vegetable]
// creates an array with the combined values from both arrays 
// same as concat fruits.concat(vegetable)


const isFruit = [...fruits]
// This is basically creating a new array pointing at the different address from the original 
isFruit === fruits 
// false

const copy = fruits 
// copy is pointing at the address that the fruits variable uses 
fruits === copy 
// True

'asdab'.split('')
// iterates the string and store each charactor in an array

[...'asdasd']
// same 


// Spread in object literals 

const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Canine',
    furry: true
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

const houseCat = {
    ...feline,
    isGrumpy: true, 
    personality: 'unpredictable'
}

const catDog = {
    ...canine,
    ...feline
}

const tripod = {
    ...canine, 
    legs: 3
} // legs is 3 because it's overwritten (order matters in the case of combining objects with spread(...))

const catDogClone = {
    ...catDog

    
[...dog]
// This will not work. objects work in objects 

{...[4,5,6]}
// index becomes key 

const random = [...'hello', {
    ...catDog
}]
// this works since ...catDog is wrapped in an array 


// The Arguments Object
function sum(){
    console.log(arguments);
}

// argument is in every function but it's not an array (it looks like array tho)

function sum(){
    const argsArr = [...arguments]
    return argsArr.reduce((total, currVal) => {
        return total + currVal
    })
}

// argument does not work with => 
const multiply = () => {
    console.log(argument);
}

// rest params 
// collects all remaining arguments into an actual array

function sum(...nums){
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

function fullName(first, last, ...titles){ // rest should only be placed at the end 
    console.log('first', first); 
    console.log('last', last)
    console.log('titles', titles)
}

fullName('tom', 'jones', 'III', 'order of the phoenix')


const multiply = (...nums) => ( // rest is an array unlike arguments
    nums.reduce((total, currVal) => total * currVal)
)


// Destructuring Arrays
// A short, clean syntax to unpack: values from arrays, properties from objects into distinct variables 

const raceResults = [
    'Eliud Kipchoge', 
    'Feyisa Lelisa', 
    'Galen Rupp',
    'Ghirmay Ghebreslassie',
    'Alphonce Simbu', 
    'Jared Ward'
]

// const gold = raceResults[0];
const [gold, silver, bronze] = raceResults;

// comma slicing will take one value 
const[first, , ,fourth] = raceResults;

const [winner, ...others] = raceResults;


const runner = { 
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}

// varialbe name must be the values existing in an object 
// but non-existing keys can be passed but the corresponding values will be 'undefined'
const {first,
       last,
       time
    } = runner
    // first =Eliud, last = Kipchoge, time = undefined 

const{country: nation,
      title: honorific    
} = runner;
// creating values with values in an object
// just used keys to access the values  

const {first, last, ...others} = runner; 
// ...other contains the rest of the object 

const results = [
    {
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya"
    },
    {
        first: "Feyisa",
        last: "Lilesa",
        country: "Ethiopia"
    },
    {
        first: "Galen",
        last: "Rupp",
        country: "United States"
    },
]

const [{first: goldWinner},{country}] = results; 

const [, silverMedal] = results 
const {country} = silverMedal; 


// Param Destructuring 

// const runner = {
//     first: "Eliud",
//     last: "Kipchoge",
//     country: "Kenya",
//     title: "Elder of the Order of the Golden Heart of Kenya"
// }

// function print(person){
//     const {first, last, title} = person;
//     console.log(`${first} ${last}, ${title}`)
// }

function print({ // This expects an object to be passed in 
    first,
    last,
    title
}){
    console.log(`${first} ${last}, ${title}`)
}

const response = [
    'HTTP/1.1',
    '200 OK',
    'application/json'
]

function parseResponse([protocol, statusCode, contentType]){ //This expects an array to be passed in 
    console.log(`Status: ${statusCode}`);
}