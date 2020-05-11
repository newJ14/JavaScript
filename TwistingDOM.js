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

