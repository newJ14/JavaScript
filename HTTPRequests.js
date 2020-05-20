// // Intro to AJAX
// // Asynchronous Javascript and XML

// XML
// <name>
//     <first>Todd</first>
//     <last>Smith</last>
// </name>
// <email>Todd@gmail.com</email>

// JSON
// {
//     name: {
//         first: 'Todd',
//         last: 'Smith'
//     },
//     email: 'Todd@gmail.com'
// }

// JSON - cant store functions
// Javascript Object Notation


// XHR Reference 

// function reqListener () {
//     console.log(this.responseText);
//   }
  
//   var oReq = new XMLHttpRequest();
//   oReq.addEventListener("load", reqListener);
//   oReq.open("GET", "http://www.example.org/example.txt");
//   oReq.send();


const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load', function(){
    console.log('it worked')
    // this notation wont work with an arrow function
    const data = JSON.parse(this.responseText)
    console.log(data)
    const filmURL = (data.results[0].films[0]);
    const filmReq = new XMLHttpRequest();
    filmReq.addEventListener('load', function(){
        console.log('second worked')
        const filmData = JSON.parse(this.responseText);
        console.log(filmData);
    })

    filmReq.addEventListener('error', function(e){
        console.log('Error!', e);
    })
    filmReq.open('GET', filmURL);
    filmReq.send();
    for(let planet of data.results){
        console.log(planet.name);
    }
})

firstReq.addEventListener('error', () =>{
    console.log('it did not work')
})

firstReq.open('GET', "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent!");




const checkStatusAndParse = (response) => {
    console.log(response)
    if(!response.ok)
    // Fetch will only return a rejected promise in the event of no response due to internet connection etc.,
        throw new Error(`status code error: ${response.status}`);
    
    // response.json() returns another promise
    return response.json();
    // parsing to json
}

// promise object passed down 
const printPlanets = (data) => {
    console.log(data)
    console.log('Loaded 10 more planets...')
    for (let planet of data.results){
        console.log(planet.name);
    }
    // This function needs to return Promise otherwise it wont work 
    // To solve the problem 1.
    // const p = new Promise((resolve, reject) => {
    //     resolve(data)
    // })
    // return p;

    // 2.
    return Promise.resolve(data.next);
}

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
    return fetch(url);
}

// fetch (Better than XHR)
fetchNextPlanets()
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(checkStatusAndParse)
    .then(printPlanets)
    .catch((err) => {
        console.log('something went wrong with fetch')
        console.log(err);
    })


// AXIOS - Library to make requests 
// Data is already parsed 

const fetchNextPlanets = (url = "https://swapi.dev/api/planets/") => {
    return axios.get(url);
}

const printPlanets = ({data}) => {
    console.log(data);
    for(let planet of data.results){
        console.log(planet.name);
    }
    return Promise.resolve(data.next)
};

fetchNextPlanets()
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .then(fetchNextPlanets)
    .then(printPlanets)
    .catch((err) => {
        console.log('ERROR!!', err);
    })

// axios
//     .get("https://swapi.dev/api/planets/")

//     .then(({data}) => {
//         console.log(data);
//         for(let planet of data.results){
//             console.log(planet.name);
//         }
//         return axios.get(data.next)
//     })

//     .then(({data}) => {
//         console.log(data);
//         for(let planet of data.results){
//             console.log(planet.name);
//         }
//     })

//     .catch((err) => {
//         console.log('ERROR!!', err);
//     })
