// Selecting 
const img = document.getElementById('puppy-photo')
const p =document.getElementById('main')

// console.dir(img) HTMLImageElement
// console.dir(p) HTMLParagraphElement

const inputs = document.getElementsByTagName('input') //HTMLCollection
// document.getElementsByTagName('li') HTMLCollection -> array like object but not an array
// It returns an empty collection if a tag does not exist 

// Array methods won't work (pop() indexOf() Includes() etc., )
// const arr = [...inputs] you can make it as an array

// Iterable and aceess data using index (HTMLCollection[1])
// for(let input of inputs){console.log(input)}
// for(let input of inputs) {console.log(input.value)} 



document.getElementsByClassName('header');
// returns an empty HTMLCollection if a tag does not exist 

const ul = document.getElementsByTagName('ul')[0]
ul.getElementsByClassName('special')
// If you want to get special class name in only unordered list 
// getElementById does not work this way since there is supposed to be only one id throughout the whole document 


// Query Selector
// Only returns a single element at most 

document.querySelector('h1');
document.querySelector('p');
document.querySelector('input');
document.querySelector('#puppy-photo');
// document.querySelector('#main') = document.getElemenyById('main')

document.querySelector('body section ul li.special')

document.querySelector('input[type ="password"]')
// css attribute selector syntax 

document.querySelectorAll('input')
// NodeList (This is just another container) This is also array like object 
// ForEach is available (not with HTMLCollection)

