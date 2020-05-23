// console.log(this)
class Timer {

    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);//.bind(this)); //"this" force the value of this to be an instance of class ++
        this.pauseButton.addEventListener('click', this.pause);
    }

// With arrow functions the this keyword always represents the object that defined the arrow function.

    // start(){
    //     this.importantMethodToCall()
    // } ++

    start = () => {
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    }

    // importantMethodToCall(){
    //     console.log('important')
    // } ++ 

    pause = () => {
        clearInterval(this.interval);
    }

    onDurationChange(){

    }

    tick = () => {
        console.log('tick');
    }

}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);



// // The value of this 
// // Arrow function: wtire console.log(this) on the first valid line above the arrow function 
// // value of this in the arrow function will be equal to that console.log
// console.log(this)
// const printThis = () => {
//     console.log(this)
// }

// const colors = {
//     printColor(){
//         console.log(this)
//         const printThis = () => {
//             console.log(this);
//         }
//         printThis();
//     }
    
// }

// // bind, call, apply: this is equal to the first argument of bind call or apply
// const printThis = function(){
//     console.log(this);
// }

// printThis.call({color: 'red'});
// printThis.apply({color: 'red'});
// // The first argument will overwrite the value of this inside there 


// // All other cases: this is equal to whatever is to the left of the '.' in the method call
// const colors = {
//     printColor(){
//         console.log(this)
//     }
// }
// colors.printColor();

// const randomObject = {
//     a: 1
// }

// randomObject.printColor = colors.printColor;
// randomObject.printColor();
