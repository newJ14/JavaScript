// innerText
const h1 = document.querySelector('h1');
h1.innerText
h1.textContent //same as innerText
//innerText will get you pure text. Don't show line spacing or script tags (shows whats actually displaying on the page)
//textContent will get you line spacing and everything that's decribed in HTML
// Also values in script tags will be considered as text 
// textContent is a litte bit faster as it spits out everything such as values in tags //display:none etc
const ul = document.querySelector('ul');
ul.innerText

// Shows all the text in the body
document.querySelector('body')  === document.body
document.body.innerText

// The list is gone when text value is assignd to ul
ul.innerText = 'I am a big ul!'


// innerHTML
const form = document.querySelector('form')
form.innerHTML // shows all of the elements inside 

ul.innerHTML // shows both tags, attributes and text 

form.innerHTML = 'kdfpasd' //removes all the tags and only the text will display 

form.innerHTML = "<b> I'm a bold tag </b>"
// if you are adding an element you can do it this way. The drawback of using this method is that the bold element needs to be added as an object in the browser. 
// Since it needs to distinguish elements and text, it will just take a bit more time 

h1.innerText //you can only add string
h1.innerHTML += ' <b> is cool</b>' // you can add text or tags this way 


// Value, src, href and more 
const inputs = document.querySelectorAll('input')

inputs[0].value 
inputs[2].checked // to check if the checkbox is checked 
inputs[1].placeholder

const a = document.querySelector('a')
a.href

const img = document.querySelector('img')
img.src

const range = document.querySelector('input[type = "range"]')
range.getAttribute('max')
range.setAttribute('min', '-500')
range.setAttribute('type', 'radio')


// Finding Parent/Children/Siblings

const firstLi = document.querySelector('li')
firstLi.parentElement //accessing parent element 
firstLi.parentElement.parentElement

ul = document.querySelector('ul')

ul.children
ul.children[0].innerText

const secondLi = firstLi.nextElementSibling
firstLi.nextElementSibling.nextElementSibling
secondLi.previousElementSibling


// Changing multiple elements 
const allLis = document.querySelectorAll('li');

for(let i = 0; i< allLis.length; i++){
    console.log(allLis[i].innerText)
}

for(let i = 0; i< allLis.length; i++){
    allLis[i].innerText = 'We are the champion'
}

for(let li of allLis){
    li.innerHTML = 'We are <b>THE CHAMPIONS</b>'
}

// Altering Styles

const h1 = document.querySelector('h1')
h1.style.color = 'teal' // only contains inline style 

const p = document.querySelector('p')
p.style.color = 'white'
p.style.backgroundColor
p.style.fontSize = '40px'

// const allLis = document.querySelectorAll('li');
const colors = ['red','orange','yellow','green','blue','purple']

allLis.forEach((li, i) => {
    const color = colors[i];
    li.style.color = color; 
})


// getComputedStyle
const h1 = document.querySelector('h1')
const compStyles = getComputedStyle(h1)

compStyles.color
compStyles.fontSize
// -> cmputedStyle is a great way to figure out what's going on 
// You can have a whole bunch of styles being applied to one element 
// But to know what is actually winning what is actually showing up in the DOM and taking effect 


// Manipulating Classes
const todo = document.querySelector('#todos .todo')
todo.style.color = 'gray'
todo.style.textDecoration = 'line-through';
todo.style.opacity = '50%'

todo.getAttribute('class')
todo.setAttribute('class', 'done') // you are gonna overwite the exisiting todo class 

todo.setAttribute('class', 'todo done') //You are just adding a class (todo + done) - same as below 
todo.setAttribute('class', todo.getAttribute('class') + ' done') // adding done to the existing class

todo.classList.remove('done') // removing class 
todo.classList.add('done') //adding class 

todo.classList.toggle('done')
// adding and removing over and over 


todo.getAttribute('class').includes('done') // check if done is included 


// Creating elements 

const newh2 = document.createElement('h2')
console.dir(newh2);

newh2.innerText = 'I like animal!'
newh2.classList.add('special')

const section = document.querySelector('section')
section.appendChild(newh2)

const newImg = document.createElement('img');

console.dir(newImg)

newImg.src = 'data:image/jpeg;base64,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'

document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = "Video"
newLink.href = 'http://www.google.com'

const firstP = document.querySelector('p');
firstP.appendChild(newLink)


// Append prepend insertBefore
 
const parentUL = document.querySelector('ul')
parentUL

const newLI = document.createElement('li')
newLI.innerText = 'I AM A NEW LI'

parentUL.appendChild(newLI)

const firstLI = document.querySelector('li.todo');

parentUL.insertBefore(newLI, firstLI)
// We need the parentElement.inserBefore(What we are actually adding, location)

const lastUL = document.querySelectorAll('li.todo')[2]
parentUL.insertBefore(newLI, lastUL)
​
const i = document.createElement('i')
i.innerText = 'I am italics'

const firstP = document.querySelector('p')
firstP.insertAdjacentElement('beforebegin', i)

firstP.insertAdjacentElement('afterbegin', i)

firstP.insertAdjacentElement('afterbegin', i)

firstP.insertAdjacentElement('beforeend', i)


// append() prepend() - do not work on IE
newLI

firstP.append(i, newLI)
firstP.prepend(i, newLI)
// firstP.appendChild(i, newLI) - This won't work because you can't pass two arguments to appendChild()


// remove and removeChild
const ul = document.querySelector('section ul')
ul.querySelector('.special')

const removeMe = ul.querySEelctor('.special');

ul.removeChild(removeMe)
// Parent.removeChild(child)

const deleted = ul.removeChild(removeMe)

const h1 = document.querySelector('h1')
document.body.removeChild('h1')
h1.remove() //does not work on IE 





