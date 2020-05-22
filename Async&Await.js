function getData(){
    const data = axios.get('https://swapi.dev/api/planets/').then((data) => {
        console.log(data);
    })
    console.log(data);
}

// Async Keyword
// Async functiosn alwqays return a promise
// If the function returns a value, the promise will be resolved with that value
// If the function throws an exception, the promise will be rejected

// This reuturns a promise with the value "Hello!"
async function greet(){
    return "Hello!"
}

greet().then((val) => {
    console.log('Promise resolved with: ', val);
})


// When an error is raised, the promise is rejected 
async function add(x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw 'X and Y must be numbers!';
    }
    return x + y;
}

function add(x,y){
    return new Promise((resolve, reject) => {
        if(typeof x !== 'number' || typeof y !== 'number'){
            throw 'X and Y must be numbers!';
        }
        resolve(x+y);
    })
} 

add(6, 7)
.then(val => {
    console.log('Prmise resolved with: ', val)
})
.catch((err) => {
    console.log('Promise rejected with: ', err)
})

// Await Keyword
// We can only use the await keyword inbside of function declared with async
// await will pause the exectuion of the function, waiting for a promise to be resolved

// function getPlanets(){
//     return axios.get('https://swapi.dev/api/planets/')
// }

// getPlanets().then((res) => {
//     console.log(res.data);
// })

async function getPlanets(){
    try {
        const res = await axios.get('https://swapi.dev/api/planets/')
        console.log(res.data);
    } catch (e){
        console.log('In catch', e)
    }
}

getPlanets().catch((err) => {
    console.log('in catch');
    console.log(err);
})



// Multiple awaits

const moveX = (element, amount, delay) => {
    return new Promise((resolve, reject) => {

    setTimeout(() => {
        const bodyBoundary = document.body.clientWidth;
        const elRight = element.getBoundingClientRect().right;
        const currLeft = element.getBoundingClientRect().left;
    
        if(elRight + amount > bodyBoundary){
            reject({bodyBoundary, elRight, amount})
        }
        else{
            element.style.transform = `translateX(${currLeft + amount}px)`;
            resolve();
        }
    }, delay);
})
};

const btn = document.querySelector('button');
async function animateRight(el, amt){
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    await moveX(el, amt, 1000)
    // moveX(el, 100, 1000)
}

animateRight(btn, 100).catch(err => {
    console.log("All done!");
    animateRight(btn, -100);
})

// const btn = document.querySelector('button');
// moveX(btn, 100, 1000)
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .then (() => moveX(btn, 100, 1000))
//     .catch(({bodyBoundary, amount, elRight}) => {
//         console.log(`Body is ${bodyBoundary}px wide`);
//         console.log(`Element is at ${elRight}px, ${amount}px is too large`);
//     })
//     return x + y;
// }

// Sequential Requests 
async function get3Pokemon(){

    // Awaiting sequence
    // const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1/')
    // const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2/')
    // const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3/')
// Each line of code waits until it gets a resolved value
// Then stores the resolved value to each variable 

// Awaiting parellel
    const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/')
    const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/')
    const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/')
    // Promise will be stored to each variable 
    // console.log(prom1);
    // const poke1 = await prom1
    // const poke2 = await prom2 
    // const poke3 = await prom3
    const results = await Promise.all([prom1, prom2, prom3])
    printPokemon(results);
}

function printPokemon(results){
    for(let pokemon of results){
        console.log(pokemon.data.name);
    }
}


get3Pokemon()




function changeBodyColor(color, delay){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

// changeBodyColor('teal',1000)

// async function lightShow(){
//     await changeBodyColor('teal', 1000);
//     await changeBodyColor('pink', 1000);
//     await changeBodyColor('indigo', 1000);
//     await changeBodyColor('violet', 1000);
// }

async function lightShow(){
    const p1 = changeBodyColor('teal', 1000);
    const p2 = changeBodyColor('pink', 1000);
    const p3 = changeBodyColor('indigo', 1000);
    const p4 = changeBodyColor('violet', 1000);

    await p1
    await p2
    await p3
    await p4
}

lightShow()

