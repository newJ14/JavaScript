//  Comparisoon operators 
// >, <, >=, <= 
// Ex: "hello".length >= "hello!".length 
// 'a' < 'A' (false)
// 'B' < 'a' (true)
// Check unicode to compare string values 

// == eqaulity - This ignores data types because it converts data to the common type and compare them
// 7 == "7" retruns true
// 0 =='' returns true
// 0 == false returns true
// null == undefined returns true
// != not eaual


// === strict eqaulity - this cares about data types 
// let isLoggedin = false; 
// isLoggedin == false; -> true
// isLoggedin = 0;
// isLoggedin == false; -> true (which is not ture)
// !== strict non-eauality  


// Example 1
let rating = 3;

if(rating === 3){
    console.log("You are a superstar");
} else if (rating === 2){
    console.log("meets expectations");
} else if(rating ---1){
    consoke.log("Needs improvement");
} else {
    console.log("Invalid!")
}

// Example 2
let highScroe = 1430;
let userScore = 1200;

if(userScore >= highScore){
    console.log(`Congrats, you have the new high score of ${userScore}`);
    highScroe = userScore
} else {
    console.log(`Good Game. Your score of ${userScore} did not beat 
    the high score of ${highScore}`)
}
// Example 3 (Nesting)

let password = "cat dog";

if(password.length >= 6){
    if(password.indexOf(' ') !== -1){
        console.log("Password cannot include spaces"); 
    } else {
        console.log("Valid password!!");
    }
}  else {
    console.log("Password too short");
}

// Truthy & Falsy values 
// all the numbers except for 0 are truthy 

// Falsy values: false, 0, ""(empty string), null, undefiend, NaN

let mystery = 5;

if(mystery){
    console.log("truthy");
} else {
    console.log('Falsy');
}

if(loggedInUser){
    console.log("you are logged in");
} else {
    console.log("please log in");
}


// Operators 
// && - both sides are true 
// true && true -> true, true && false -> false 
if(password.length >= 8 && password.indexOf(' ') === -1){
    console.log("valid password")
} else {
    console.log("Invalid password")
};


let num = 3; 

if(num >= 1 && num <= 10){
    console.log("Number is between 1 and 10");
} else {
    console.log('Please guess a number between 1 and 10');
}

// || - at least one side is true 
let age = 78;

if(age < 6 || age >= 65){
    console.log("You get in for free");
} else {
    console.log("Y;ou must pay!")
}

let color = 'violet';

if(color === 'purple' || color === 'lilac' || color === 'violet'){
    console.log('Great Choice!');
}


// ! (not) - returns true if the expression is false 

let loggedInUser;

// If there isn't a logged in user 

if(!loggedInUser){
    console.log('Get out of here!');
} 

let flavor = "grape";

if(flavor !== 'grape' && flavor !== 'cherry'){
    console.log("we dont have that flavor");
}


if(!(flavor === 'grape' || flavor === 'cherry')){
    console.log("we dont have that flavor");
}

// both if statements above do the same thing  


// Operator precedence (Check MDN)
// let x = 7;
// x == 7 || x === 3 && x > 10; -> true (order matters for the logical operators)
// && operator runs before || so it works like the code below 
// x == 7 || (x === 3 && x > 10); 

let day = 3; 

if (day === 1){
    console.log("Monday")
} else if (day === 2){
    console.log("Tuesday")
} else if (day === 3){
    console.log("Wednesday")
} else if (day === 4){
    console.log("Thursday")
} else if (day === 5){
    console.log("Friday")
} else if (day === 6){
    console.log("Saturday")
} else if (day === 7){
    console.log("Sunday")
} else {
    console.log("Invalid")
}

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let emoji = "sad face";

switch (emoji){
    case 'sad face':
    case 'happy face':
        console.log("yellow");
        break;
}
// Because there is no break statement after "sad face", 
// it moves one and runs console.log("yellow")

// ternary operator 
// condition ? expIfTrue: expIfFalse

let num = 7; 

// if(num ===7){
//     console.log('lucky!');
// } else {
//     console.log('Bad!');
// }

num === 7 ? console.log('lucky!') : console.log('Bad!');


let status = "offline"; 

// let color;
// if(status === "offline"){
//     color = 'red';
// } else {
//     color = 'green'
// }

let color = status === 'offline' ? 'red' : 'green';


