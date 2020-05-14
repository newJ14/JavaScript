// Shorthand property 
const getStats = (arr) => {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sum = arr.reduce((sum, r) => sum + r);
    const avg = sum / arr.length;
    return{
        // Traditional way of doing this 
        // max: max,
        // min: min,
        // sum: sum,
        // avg: avg

        // It works with this as well :' ) now 
        // Does not work in IE
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const stats = getStats(reviews);


// Computed property -> [variable]
const role = 'host';
const person = 'Jools Holland'
const role2 = 'Director'
const person2 = 'James Cameron'
// const team = {
//     role: person, 
// }

// team['role'] {'Jools Holland'}

// const team = {};
// team[role] = person {host:'jools Holland'}

const team = {
    [role]: person,
    [role2]: person2,
    [1+6+9]: 'sixteen'
}

function addProp(obj, k, v){
    const copy = {...obj}
    copy[k] = v;
    return copy 
}

const res = addProp(team, 'happy', ':)')

// const addProp = (obj, k, v) => {
//     return {
//         ...obj,
//         [k]: v
//     }
// }

const addProp = (obj, k, v) => ({...obj, [k]: v})


// adding methods to objects 

const add = function(x,y){
    return x + y;
}

const math = {
    add
}
// math.add(2, 3). You are basically acessing the add method (same address) outside of math  

const math = {
    numbers: [1,2,3,4,5],
    add:function(x, y){
        return x + y;
    },
    multiply: function(x, y){
        return x * y; 
    }
}

math.numbers
math.add(3,4)
math.multiply(3,4)

const auth = {
    username: "TonmmyBot", 
    login(){
        console.log("Logged you in");
    },
    logout(){
        console.log("GoodBye")
    }
}


// This keyword
// reference to the current execution scope 
// window = global object 
function sayHi(){
    console.log("Hi");
    console.log(this);
}
// window is the global scope of the browser 
// sayHi is added as a property in the window object

// let num = 400;
// window.num is undefiend 
// let and const are not added to the global scope (window)

const greet = function(){
    console.log(this); //window
}

const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickName: 'Cher',
    fullName(){
        const{first, last, nickName} = this; // object destructuring 
        return (`${first} ${last} AKA ${nickName}`);
    },
    
    printBio(){
        const fullName = this.fullName();
        console.log(`${fullName} is a person!`)
    },

    laugh : () => { //Arrow method does not behave the same 
        // this still refers to window. Therefore, arrow functions are typically not used for methods in objects
        console.log(this);
        console.log(`${this.nickName} says HAHAHAHHAAAH`)
    }
}

const printBio = person.printBio;
// Now this refers to the window object 


const annoyer = {
    phrases: ["literally", "cray cray", "I can't even", "Totes!", "YOLO", "Can't Stop, Won't Stop"],
    
    pickPhrase(){
        phrases = this.phrases;
        // const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },

    start(){
        this.timerId = setInterval (() => {
            console.log(this.pickPhrase())
        },3000)
    },

    stop(){
        clearInterval(this.timerId);
    }
}

annoyer.start()
annoyer.stop()



// Without Object
function initializeDeck(){
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = '2,3,4,5,6,7,8,9,10,J,Q,K,A';
    const deck = [];

    for(let value of values.split(',')){
        for(let suit of suits){
            deck.push({value: value, suit: suit});
        }
    } 
    return deck;
}

function drawCard(deck, drawnCards){
    const card = deck.pop();
    drawnCards.push(card);
    return card;
}

function drawMultiple(numCards, deck, drawnCards){
    const cards = [];
    for(let i = 0; i < numCards; i++){
        cards.push(drawCard(deck, drawnCards));
    }
    return cards;
}

function shuffle(deck){
    // loop over array backwards
    for(let i = deck.length - 1; i > 0; i--){
        // pick random index before current element 
        let j = Math.floor(Math.random() * (i+1));
        // swap 
        [deck[i], deck[j]] = [deck[j], deck[i]];

    }
    return deck;
}


const firstDeck = initializeDeck();
const drawnCards = [];
shuffle(firstDeck);
const hand1 = drawMultiple(5, firstDeck, drawnCards)
const hand2 = drawMultiple(5, firstDeck, drawnCards)
const pokerHand = drawnMultiple(5, firstDeck, drawnCards)




// Object
const myDeck = {
    deck: [],
    drawnCards: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    
    initializeDeck(){
        const{suits, values, deck} = this;
        
        for(let value of values.split(',')){
            for(let suit of suits){
                deck.push({value: value, suit: suit});
            }
        } 
        // return deck;
    },
    drawCard(){
        const card = this.deck.pop();
        this.drawnCards.push(card);
        return card;
    },
    drawMultiple(numCards){
        const cards = [];
        for(let i = 0; i< numCards; i++){
            cards.push(this.drawCard());
        }
        return cards;
    },
    shuffle(){
        const {deck} = this;
        // loop over array backwards
        for(let i = deck.length - 1; i > 0; i--){
            // pick random index before current element 
            let j = Math.floor(Math.random() * (i+1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
            // swap 
            console.log(deck);
        }
    }
}


myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(3);




const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['hearts', 'diamonds', 'spades', 'clubs'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        
        initializeDeck(){
            const{suits, values, deck} = this;
            
            for(let value of values.split(',')){
                for(let suit of suits){
                    deck.push({value: value, suit: suit});
                }
            } 
            // return deck;
        },
        drawCard(){
            const card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(numCards){
            const cards = [];
            for(let i = 0; i< numCards; i++){
                cards.push(this.drawCard());
            }
            return cards;
        },
        shuffle(){
            const {deck} = this;
            // loop over array backwards
            for(let i = deck.length - 1; i > 0; i--){
                // pick random index before current element 
                let j = Math.floor(Math.random() * (i+1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
                // swap 
                console.log(deck);
            }
        }
    }
}

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);

const deck2 = makeDeck();
deck2.initializeDeck()
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);