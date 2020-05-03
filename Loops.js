// for loop
for(let num = 1; num <= 20; num++){
    console.log(`${num} x ${num} = ${num * num}`);
}

for(let i = 200; i >= 0; i-=25 ){
    console.log(i)
}


// Infinite for loop
for (let i = 20; i >= 0; i++){
    console.log(i);
} // DO NOT RUN THIS EVER


// for loops + arrays 

const examScores = [98, 77, 84, 91, 57, 66];

for(let i = 0; i < examScores.length; i++){
    console.log(i, examScores[i]);
}

const students = [
    {
        firstName: 'Zeus',
        grade: 86
    },
    {
        firstName: 'Artemis',
        grade: 97
    },
    {
        firstName: 'Hera',
        grade: 72
    },
    {
        firstName: 'Apollo',
        grade: 90
    },
]

for(let i = 0; i < students.length; i++){
    let student = students[i];
    console.log(`${student.firstName} scored ${student.grade}`);
}


const word = 'stressed';
let reversedWord = "";

for(let i = word.length-1; i >= 0; i--){
    reversedWord += word[i];
}


// Nested for loops
for (let i = 1; i <= 10; i++){
    console.log('Outer loop:', i);
    for(let j = 10; j >= 0; j -= 2){
        console.log('Inner loop:', j)
    }
}

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let totalScore = 0;
for(let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    for(let j = 0; j < row.length; j++){
        totalScore += row[j];
    }
}


// While loops

let j = 0;
while(j <= 5){ //run if the statement is true
    console.log(j);
    j++;
}


const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10); 

while(guess !== target){
    console.log(guess);
    guess = Math.floor(Math.random() * 10); 
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congraturations you win!!')

// while (some condition)
// in the loop, update or attempt to make that condition false 
// Otherwise, it will be an infinite loop 


// break
for( let i = 0; i < 10; i++){
    console.log(i);
    if(i === 5){
        break;
    }
}

while(true){ //Not ideal since true is not that explanatory
    if(target === guess) break;
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10); 
}

console.log(`Target: ${target} Guess: ${guess}`);
console.log('Congraturations you win!!')


// for...of
let subreddits = ['soccer', 'popheads', 'cringe', 'books'];

for(let i = 0; i < subreddits.length; i++){
    console.log(subreddits[i]);
}

for(let subreddit of subreddits){
    console.log(subreddit);
}

for(let char of "hello world!"){
    console.log(char.toUpperCase);
}

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];
// Traiditional for loop
for(let i = 0; i < magicSquare.length; i++){
    let sum = 0;
    let row = magicSquare[i];
    for(let j = 0; j < row.length; j++){
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}
// For of loop -> this makes the syntax short and clear
for(let row of magicSquare){
    let sum = 0;
    for(let num of row){
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}


const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];

for(let i = 0; i < words1.length; i++){
    console.log(`${words1[i]}${words2[i]}`);
}


// For~of loop with objects 
// Objects are not iterable
// Object.keys(variable)
// Object.values(variable)

const movieReviews = {
    Arrival: 9.5,
    Alien: 9, 
    Amelie: 8, 
    'In Bruges': 9,
    Amadeus: 10,
    'Kill Bill': 8,
    'Little Miss Sunshine': 8.5, 
    Coraline: 7.5
}

for (let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);
}


const ratings = Object.values(movieReviews)
let total = 0;
for(let r of ratings){
    total += r;
}

let avearage = total/ratings.length;
console.log(avearage);

// For~in: loop over the keys in an object 
const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChallenge: 300000,
    tournamentOfChampions: 500000,
    battleOfTHeDecades: 100000
}

for(let prop in jeopardyWinnings){
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}

let total = 0;
for(let prop in jeopardyWinnings){
    total += jeopardyWinnings[prop];
}
console.log(`Total Earnigns: ${total}`);


// prints out indexes  
for(let k in [44,55,66,77]){
    console.log(k);
}