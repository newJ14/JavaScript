// forEach
// Accepts a callback function and calls the function once per element in the array

const numbers = [20,21,22,23,24,25,26,27];

numbers.forEach(function(num){
    console.log(num * 2);
});

function printTriple(n){
    console.log(n * 3);
}

numbers.forEach(printTriple);
// you can predefine a function before using forEach 

const books = [{
        title: 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25,
        genres: ['fiction', 'fantasy']
    },
    {
        title: 'Changing My Mind',
        authors: ['Zadie Smith'],
        rating: 3.83,
        genres: ['nonfiction', 'essays'] 
    },
    {
        title: 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42,
        genres: ['fiction', 'graphic novel', 'fantasy']
    },
    {
        title: 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11,
        genres: ['fiction', 'fantasy']
        },
    {
        title: 'A Gentlman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36,
        genres: ['fiction', 'historical fiction']
    }
]

// This is a function 
books.forEach(function(book){
    console.log(book.title.toUpperCase());
})

//This is a code block
for(let book of books){
    console.log(book.title.toUpperCase());
}

for(let i = 0; i < books.length; i++){
    console.log(books[i].title.toUpperCase());
}

// -> The three will do the same thing

numbers.forEach(function(num, idx){
    console.log(idx, num)
});
// -> you can get the index of each element by inserting idx 


// Map
// Creates a new array with the results of calling a callback on every element in the array 

const numbers = [20,21,22,23,24,25,26,27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num){
    return num * 2;
})
// map does not care if a value is returned or not. Without return statement, it will save undefined

numbers.map(function(n){
    if (n % 2 === 0){
        return {value: n, isEven: true};
    } else {
        return {valhe: n, isEven: false};
    }
})

const numDetail = numbers.map(function(n){
    return {
        value: n,
        isEven: n % 2 === 0
    };
})

const abbrevs = words.map(function(word){
    return word.toUpperCase().split('').join('.');
});


const title = books.map(function(book){
    return book.title;
})

// Arrow functions
// Syntactically compact alternative to a regular function expression (Doesn't work on IE)

// const square = function(x){
//     return x * x;
// }

const square = (x) => {
    return x * x; 
}

// Implicit returns 
const square = x => (
    x * x
)

const square = x => x * x;

// This is not going to work. Implicit return only works when there is only one possible value that is expected to return 
const square = n => {
    if (n < 0){
        return false;
    }
    n * n
}

const isEven = (num) => {
    return num % 2 === 0;
}

const multiply = (x, y) => {
    return x * y;
}

const greet = () => {
    console.log("Hi!");
}


const nums = [1,2,3,4,5,6,7,8];

const doubles1 = nums.map(function(n){
    return n * 2;
});

const doubles2 = nums.map(n => {
    return n * 2;
});

const doubles3 = nums.map(n => n * 2);

// const parityList = nums.map(function(n){
//     if(n % 2 === 0) return 'even';
//     return 'odd';
// })

// const parityList = nums.map((n) => 
//     if(n % 2 === 0) return 'even';
//     return 'odd';
// )

const parityList = nums.map((n) => 
    n  % 2 === 0 ? 'even': 'odd'
);

const parityList = nums.map((n) => b % 2 === 0 ? 'even': 'odd');


// Find 
// Returns the value of the "frist element" in the array that satisfies the provided testing function 

let movies = [
    'The Fantastic Mr. Fox',
    'Mr. and Mrs. Smith',
    'Mrs. Doubtfire', 
    'Mr. Deeds'
]

let movie = movies.find(movie => {
    return movie.includes('Mrs.');
})

const movie = movies.find(movie => {
    return movie.includes('Mrs');
}); //if true, return the movie

const movie2 = movies.find(m => (
    m.indexOf('Mrs' === 0)
));

// Refer to the books variable defiend above 
const goodBook = books.find(book => book.rating >= 4.3);
const neilBook = books.find(book => book.authors.includes('Neil Gaiman'));


// Filter
// Creates a new array with all elemnents that pass the test implemented by the provided function 

const nums = [34, 35, 67, 54, 109, 102, 32, 9];

nums.filter(n => n % 2 === 1);

const odds = nums.filter(n => n % 2 === 1);
const evens = nums.filter(n => n % 2 === 0);

const bigNums = nums.filter(n => n > 50);


const goodBooks = books.filter(b => b.rating > 4.3);

const fantasyBooks = books.filter(book => (
    book.genres.includes('fantasy')
))

const shortForm = books.filter(book => (
    book.genres.includes('short stories') || 
    book.genres.includes('essays')
))

const query = 'The';

const results = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase());
})


// Every 
// Tests whether all elements in the array pass the provided function. It returns a boolean value 

const words = ['dog', 'dig', 'log', 'bag', 'wag'];

const all3Lets = words.every(word => word.length === 3);

const allEndInG = words.every(word => {
    const last = word.length -1
    return word[last] === 'g'
});

// Some 
// Similar to every, but returns true if any of the array elements pass the test function 

const someStartWithD = words.some(word => word[0] === 'd'); // true
const allStartWithD = words.every(word => word[0] === 'd'); // false 

const allGoodBooks = books.every(book => book.rating > 4.5); // flase 
const any2Authors = books.some(bookd => book.authors.length === 2); // true 


// sort 
const prices = [400.50, 3000, 99.99, 35.99, 12.99, 9500];

prices.sort();
// consider them as strings and compares -> returns the numbers in an odd order


// if compareFunc(a,b) reutrns less than 0 -> sort a before b 

const ascSort = prices.slice().sort((a, b) => a - b);
// returns less than 0 -> sort a before b
const descSort = prices.slice().sort((a, b) => b - a);
// returns greater than 0 -> sort b before a

const badSort = prices.slice().sort();

books.sort((a, b) => a.rating - b.rating);


// Reduce 
// Executes a reducer function on each element of the array, resulting in a single value 

// Ex)
// [3,5,7,9,11].reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

const nums = [3,4,5,6,7];
const product = nums.reduce((total, currentVal) => {
    return total * currentVal; 
})

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];

const maxGrade = grades.reduce((max, currentVal) => {
    return max > currentVal ? max:c1urrentVal;
})

const minGrade = grades.reduce((min, currentVal) => 
    Math.min(min, currentVal)
);

// YOU CAN SET AN INITIAL VALUE 

[10,20,30,40,50].reduce((sum, currentVal) => {
    return sum + currentVal;
}, 1000) // initial value is set to 1000 
// Result: 1150 

const votes = ['y','y','n','y','n','y','n','y','n','n','n','y','y'];

const results = votes.reduce((tally, val) => {
    tally[val] !== undefined ? tally[val] += 1: tally[val] = 1
    return tally;
}, {})

books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if(!groupedBooks[key]) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks;
}, {});

books.reduce((groupedBooks, book) => {
    const key = Math.floor(book.rating);
    if(groupedBooks[key] === undefined) groupedBooks[key] = [];
    groupedBooks[key].push(book)
    return groupedBooks;
}, {})