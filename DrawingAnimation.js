const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);


let duration
let currentOffset = 0; 
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
        (perimeter * timeRemaining) / duration - perimeter
        );
    },
    onComplete() {
        console.log('Timer is completed')
    }
});



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
