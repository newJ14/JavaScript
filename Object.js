// Object
// Objects are collections of properties
// Properties are a key-value parseInt
// Rather than accessing data using an index, we use custom keys 


// all the keys are turned into string 

// There are two ways of accessing the properties in an object 
// fitbitData.totalSteps or fitbitData[45]

const fitbitData = {
    totalSteps: 10000, 
    totalMiles: 211.7, 
    avgCalorieBurn: 5755,
    workoutsThisweek: '5 of 7',
    avgGoodSleep: '2.13',
    45:'forty five'
}



// palette[red] does not work. - red here is a variable
// paletter['red'] will work.  = red here is a property 

const palette = {
    red: '#eb4d4b',
    yellow: '#f9ca24',
    blue: '#30336b'
};


// Adding and updating properties 
const userReviews = {};

userReviews['queenBee49'] = 4.0;

userReviews.mrSmith78 = 3.5;

userReviews[queenBee49] += 2;

userReviews.mrSmith78 ++;


// Nested Arrays & Objects

const student = {
    firstName: "David",
    lastName: "Jones",
    strengths: ['Music', 'Art'],
    exams : {
        midterm: 92,
        final: 88
    }
};

const avg = (studnet.exams.midterm + studnet.exams.final) / 2; 
student.strengths[1]


const shoppingCart = [
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
]

const game = {
    player1: {
        username: 'Blue',
        playingAs: 'X'
    },
    player2: {
        username: 'Muffins',
        playingAs: 'O'
    },
    board: 
    [['O', null, 'X'], 
     ['X', 'O', 'X'], 
     [null, 'O', 'X']]
}


// Array Object Eqaulity 
let nums = [1,2,3];
let mystery = [1,2,3];

nums === mystery
nums == mystery
// Both will not work because nums and mystery are pointing at 
// the different addresses assigned to each array 
// Arrays can be very big so variables do not directly point at arrays. It points at the addresses where the arrays are stored 
 


const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notifications: []
};

if (user.notifications === []){ // this will not work. Comparing arrays is difficult
    console.log("No new notifications!");
}

// Potential solution: user.notifications.length === 0;
// !user.notifications.length - notification 



const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notifications: ['message', 'alert']
};
// To compare user.notifications == ['message', 'alert'], we need to comapre each value in the arrays



