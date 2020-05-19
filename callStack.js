// Call Stack 
// The mechanism the JS interpreter uses to keep track of its place in a script 
// that calls multiple functions 

// How JS knows what function is currently being run and what functions are called
// from within that function 

// const repeat = (str, times) => {
//     let result = '';
//     for(let i = 0; i < times; i++){
//         result += str;
//     }
//     return result;
// }

// const scream = (str) => {
//     return str.toUpperCase() + "!!!";
// }

// const getRantText = (phrase) => {
//     let text = scream(phrase);
//     let rant = repeat(text, 8);
//     return rant;
// }

// const makeRant = (phrase, el) => {
//     const h1 = document.createElement('h1'); 
//     h1.innerText = getRantText(phrase);
//     el.appendChild(h1);
// }

// makeRant("I hate mayonnaise", document.body);
// makeRant('if you have to cough, please cover your mouth', document.body);
// Check callstack 

// JS is a single threaded
// At any given point in time, that single JS thread is running at most one line of JS code 


// console.log('I happen first!')

// setTimeout(function(){
//     console.log("I happen third");
// }, 3000)

// console.log('I happen second!') 
//Though JS is a single thread, the browser does the work. 
// Therefore, setTimeout function will run after the third one

// Browsers come with Web APIs that are able to handle certain tasks in the background (making requests or setTimeout)
// The JS call stack recognizes these Web API functions and passes them off to the browser to take care of 
// Once the browser finishes those tasks, they return and are pushed onto the stack as a callback


// Callback hell
const btn = document.querySelector('button');

// The translateX() CSS function repositions an element horizontally on the 2D plane. 
// Its result is a <transform-function> data type.
// setTimeout(() => {
//     btn.style.transform = 'translateX(100px)';
//     setTimeout(() => {
//         btn.style.transform = 'translateX(200px)';
//         setTimeout(() => {
//             btn.style.transform = 'translateX(300px)';
//             setTimeout(() => {
//                 btn.style.transform = 'translateX(400px)';
//                 setTimeout(() => {
//                     btn.style.transform = 'translateX(500px)';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)
// The first event happens first and then the next one happens 




// const moveX = (element, amount, delay, callback) => {
//     const bodyBoundary = document.body.clientWidth;
//     const elRight = element.getBoundingClientRect().right;
//     const currLeft = element.getBoundingClientRect().left;

//     if(elRight + amount > bodyBoundary){
//         console.log('done - cannot go that far')
//     } else{
//         setTimeout(() => {
//             element.style.transform = `translateX(${currLeft + amount}px)`;
//             if(callback) callback();
//         }, delay);
//     }
// };


// moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//         moveX(btn, 100, 1000, () => {
//             moveX(btn, 100, 1000, () => {
//                 moveX(btn, 1000, 1000);
//             });
//         });
//     });
// });


// const moveX = (element, amount, delay, onSuccess, onFailure) => {

//         setTimeout(() => {
//             const bodyBoundary = document.body.clientWidth;
//             const elRight = element.getBoundingClientRect().right;
//             const currLeft = element.getBoundingClientRect().left;
        
//             if(elRight + amount > bodyBoundary){
//                 onFailure();
//             }
//             else{
//                 element.style.transform = `translateX(${currLeft + amount}px)`;
//                 onSuccess();
//             }
//         }, delay);
//     };

// moveX(btn, 100, 1000, () => {
//     //success
//     moveX(btn, 400, 1000, () => {
//         moveX(btn, 700, 1000, () => {
//             console.log("Screen Left");
//         }, () => {
//             alert('cannot move further!')
//         })
//     }, () => {
//         //failure
//         alert('cannot move further!')
//     })
// }, () => {
//     //failure
//     alert('cannot move further!')
// })


// with Promise
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

moveX(btn, 300, 1000)
.then(() => {
    return moveX(btn, 300, 1000)
})
.then (() => moveX(btn, 300, 1000))
.then (() => moveX(btn, 300, 1000))
.then (() => moveX(btn, 300, 1000))
.catch(({bodyBoundary, amount, elRight}) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large`);
})

// Promise
// A promise is an object representing the eventual completion 
// or failure of an asynchronous operation

// A returned object to which you attach callbacks, instead of passing callbacks into a function

// const WillGetYouADog = new Promise((resolve, reject) => {
//     const rand = Math.random();
//     if(rand < 0.5){
//         resolve();
//     } else {
//         reject();
//     }
// });

// // resolve and reject are functions 

// WillGetYouADog.then(() => {
//     console.log("We got a dog!")
// })
// // This will run if Promise is resolved 
// WillGetYouADog.catch(() => {
//     console.log("No Dog : (")
// })


const makeDogPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if(rand < 0.5){
                resolve();
            } else {
                reject();
            }
        }, 5000);
    });
};


// resolve and reject are functions 

makeDogPromise()
    .then(() => {
        console.log("We got a dog!")
    })
    .catch(() => {
        console.log("No Dog : (")
    })
// This will run if Promise is resolved 



const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [
                    {id:1, username: 'Bilbo'},
                    {id:5, username: 'Esmerelda'}
                ],
                '/users/1': {
                    id: 1,
                    username: 'Bilbo',
                    upvotes: 360,
                    city: 'Lisbon',
                    topPostId: 454321
                }, 
                '/users/5': {
                    id: 5,
                    username: 'Esmerelda',
                    upvotes: 571,
                    city: 'Honolulu'
                },
                '/posts/454321': {
                    id: 454321,
                    title:
                    'LAdies & Gentlemen, may I introduce my pet pig, Hamlet'
                },
                '/about': 'This is the abhout page!'
            };
            const data = pages[url]
            if(data){
                resolve({status: 200, data})
            } else {
                reject({status: 404})
            }
        }, 1000);
    });
};

fakeRequest('/users')
// .then((res) => {
//     const id = (res.data[0].id);
//     fakeRequest(`/users/${id}`).then((res) => {
//         const postId = res.data.topPostId;
//         fakeRequest(`/posts/${postId}`).then((res) => {
//             console.log(res);
//         })
//     })
// })

.then((res) => {
    console.log(res);
    const id = res.data[0].id;
    return fakeRequest(`/users/${id}`);
})

.then((res) => {
    console.log(res);
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
})

.then((res) => {
    console.log(res);
})

.catch((err) => {
    console.log('oh no', err);
});
// we need only one .catch for the code above to catch errors