// Creating array (Storing both integer and string in an array is possible)
// [1,2,3]
// ['a', 'b', 'c']
// [1, 'b', 3]

// new Array()


// Array is mutable 
let shoppingList = ["Milk", "Chocolate"];

shoppingList[0] = "Onion";
shoppingList[2] = "Milk";

shoppingList[shoppingList.length] = "Watermelon"
// Adding values this way is not ideal

// push - add to the end
shoppingList.push("Orange");

// pop - remove from the end
shoppingList.pop();

// shift - remove from the start
shoppingList.shift();

// unshift - add to the start
shoppingList.unshift('Chips');
shoppingList.unshift('Pops', 'Juice'); //The order is preserved. 
// adding ('Pops', 'Juice') like this 

// concat - concatenate two arrays
let fruits = ['apple', 'banana'];
let veggies = ['cucumber', 'bean sprouts'];
let meats = ['steak', 'chicken breast'];

fruits.concat(veggies);

let allFood = fruits.concat(veggies, meats)

// includes - check if an item is in an array
fruits.includes('pineapple');
fruits.includes('apple', 0) //chick if apple is stored in index 0

// indexof - check where the item is stored in an array
// Returns -1 if the value does not exist 
fruits.indexOf('apple') 

// reverse - reverse the array
let letters = ['T', 'C', 'E', 'P', 'S', 'E', 'R'];
letters.reverse();

// join - combine the values in an array and spit out a single string value 
letters.join('&'); //add & between the letters and make it as a string! 
letters.reverse().join('.')
[13, 5, true].join() // boolean and integers will be changed to string 

// slice - returns a shallow copy of a portion of an array 
// into a new array object selected from begin to end 
let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise']; 
let mammals = animals.slice(2,4); //(a,b) a inclusive, b exclusive
let reptiles = animals.slice(4); // 4 to the end 
animals.slice() //copy of the original array 

// splice - The splice() method changes the contents of an array by removing or
// replacing existing elements and/or adding new elements in place.

animals.splice(1,0,'octopus'); //where I want to start, how many I should delete, items 
// This returns an empty array because I did not delete anything 
// This would return something if a value were removed

animals.splice(3, 2);
// returns ["whale", "bear"] - deleted values 

animals.splice(3,0,'snake', 'salmon');
// add sname and salmon in the index 3

animals.splice(0, 2, 'SHARK!', 'OCTOPUS!');
// Delete the first two values at the beginning and insert "SHARK!" and "OCTOPUS!


// Sort - Converts everything to string values and sort the values based off of the UTF-16 code
let people = ['Mrs. Robsinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
// Alphabetically sort values 

let nums = [34, 10, 10000, 67, 99]; 
// [10, 10000, 34, 67, 99] it's not numeric sort 


// Reference types 
let fruit = 'orange';
let color = fruit;

fruit = 'apple';
// color is still orange 
// value type variable (primitive types)
// the value itself is saved in memory (variable)


let nums = [5,6,7,8];
let otherNums = nums;

nums.push(9);
// otherNums also becomes [5,6,7,8,9]
// the variale itself does not store the values in memory 
// it stores the point that indicates where the values are stored

const myEggs = ['brown', 'brown'];
myEggs.push('purple');
myEggs[0] = 'green'
// This is possible because we are not directly changing the refernce. 
// We are ching the values in the array 

myEggs = ['blue', 'pink'];
// This is not possible becuase the syntax above is trying to manipulate 
// the address assigned to the variable


// Nested array to make grid 
const animalPairs = [
    ['O', null, 'X'],
    [niull, 'O', 'X'],
    ['X', null,'O']
];

