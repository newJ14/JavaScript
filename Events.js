// The thing        event type      the code to run
// button           click           change the color
// input            hits return     get search results 
// image            mouseover       display the img caption



// Two ways NOT to Add Events 
// const btn = document.querySelector('#clicker');

// console.dir(btn)

// const firstBtn = document.querySelector('button');

// console.dir(firstBtn)

// btn.onclick = alert('Hi!!!')
// When you run this code, you will get HI right away 
// It's because whatever alert returns (undefined)
// It says onclick to undefined. Therefore, you need to make it as a function 

// btn.onclick = function(){
//     console.log('you clicked me! go away!');
// }

// btn.ondblclick = function(){
//     console.log("Double click");
// }



// addEventListener
// const btn = document.querySelector('button');

// // btn.onclick = function(){
// //     console.log('you clicked me!');
// // }

// //This will overwite the first onclick event 
// // btn.onclick = function(){
// //     console.log("Second Time");
// // }


// btn.addEventListener('click', function(){
//     alert('Clicked');
// })

// // You are not setting the onlick property. 
// // You are attaching an event listener 
// // Therefore, both events will work with one click of the button (not overwritten)
// btn.addEventListener('click', function(){
//     alert('Second Thing');
// });

// btn.addEventListener('mouseover', function(){
//     btn.innerText = 'Stop Touching Me'
// })

// btn.addEventListener('mouseout', function(){
//     btn.innerText = 'Click Me'
// })

// window.addEventListener('scroll', function(){
//     console.log('Stop Scrollibn!');
// })


// The impossible button Demo
// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function(){
//     console.log('mouseover')
//     const height = Math.floor(Math.random() * window.innerHeight)
//     const width = Math.floor(Math.random() * window.innerWidth)
//     // innerHeight and innerWidth change depending on the size of windows open 
//     btn.style.left = `${width}px`;
//     btn.style.top  = `${height}px`;
// })

// btn.addEventListener('click', function(){
//     btn.innerText = "You got me!";
//     document.body.style.backgroundColor = 'green'
// })


// Events on Multiple Events

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
]


// const h1 = document.querySelector('h1'); 
// const changeColor = function(evt){
//     console.log(evt)
//     h1.style.color = this.style.backgroundColor;
//     // This refers to whaverever you are adding eventlistener to 
// };

// const container = document.querySelector('#boxes');


// for (let color of colors){
//     const box = document.createElement('div');
//     box.style.backgroundColor = color; 
//     box.classList.add('box');
//     container.appendChild(box);
//     box.addEventListener('click', changeColor);
// }

// document.body.addEventListener('keypress', function(e){
//     console.log(e);
// })



// Keypress keydown keyup
// const input = document.querySelector('#username');

// input.addEventListener('keydown', function(e){ //whatever key is predsed, this event will fire
//     console.log('key down')
// })

// input.addEventListener('keyup', function(e){ //whatever key is predsed, this event will fire
//     console.log('key up')
// })

// input.addEventListener('keypress', function(e){ //whatever key is predsed, this event will fire
//     console.log('key press')
// })
// // for something to be considered as press, there needs to be 
// // charactors showing up in the input or changes or space (enter is press)

// const addItemInput = document.querySelector('#addItem');
// const itemsUL = document.querySelector('#items');

// addItemInput.addEventListener('keypress', function(e){
//     console.log(e);
//     if(e.key === 'Enter'){
//         if(!this.value) return;
//         //add a new item to list
//         const newItemtext = this.value;
//         const newItem = document.createElement('li')
//         newItem.innerText = newItemtext;
//         itemsUL.appendChild(newItem);
//         this.value = '';
//     }
// })

// form events & preventDefault

const form = document.querySelector('#signup-form');

const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

form.addEventListener('submit', function(e){
    alert("submitted the form");
    console.log('cc', creditCardInput.value);
    // console.log('terms', termsCheckbox.value);
    // This line will not get you input values 
    console.log('terms', termsCheckbox.checked);
    console.log('veggieSelect', veggieSelect.value); 
    // send form data to db
    // append something to page using form data  
    e.preventDefault();
})


// Input and Change Event

const formData = {};
// creditCardInput.addEventListener('input', (e) => {
//     console.log('CC Changed', e);
//     formData['cc'] = e.target.value
// });

// veggieSelect.addEventListener('input', (e) => {
//     console.log('Veggie!', e);
//     formData['veggie'] = e.target.value;
// })

// termsCheckbox.addEventListener('input', (e) => {
//     console.log('CheckBox', e);
//     formData['agreeToTerms'] = e.target.checked;
// })

for(let input of [creditCardInput, termsCheckbox, veggieSelect]){
    input.addEventListener('input', ({target}) => {
        // if you put change instead of input, the event will occur when you press enter
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
    })
}
