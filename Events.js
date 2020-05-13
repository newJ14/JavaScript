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
 
const changeColor = function(){
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
    // This refers to whaverever you are adding eventlistener to 
};

const container = document.querySelector('#boxes');


for (let color of colors){
    const box = document.createElement('div');
    box.style.backgroundColor = color; 
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', changeColor);
}


