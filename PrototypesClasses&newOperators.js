// What is __proto__ ?
// Proto is a reference to blueprint object (prototype contains all the methods)
// arr.includes(2) is defined in the prototype object 

String.prototype.grumps = () => alert('Go Away!')
const cat = 'blue'
cat.grumps()

String.prototype.yell = function(){
    return `OMG ${this.toUpperCase()}`
}

Array.prototype.pop = function(){
    return 'Sorry I want that element, I will never pop it off'
}

const nums = [7,8,9]

// __proto__ is a reference to the object but prototype is an actual object 

// Basic object oriented programming 

// factory function (not common)

function makeColor(r,g,b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function(){
        const {r, g, b} = this;
        return `rgb(${r}, ${g}, ${b})`
    }

    color.hex = function (){
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
    }
    return color;
}

const firstColor = makeColor(35, 255, 150);

const black = makeColor(0,0,0);

black.hex === firstColor.hex 
// referring to different functions 

'hi'.slice === 'bye'.slice
// referring to the same method

// hex(255, 100, 25)


// Creates a blank, plain JS object
// Links (sets the constructor of) this object to another object
// Passes the newly created object from Step 1 as the this context;
// Returns this if the function doesn't return its own object 

function Color(r, g, b){ 
    this.r = r;
    this.g = g;
    this.b = b;
}

// This has to be defined outside of Color
Color.prototype.rgb = function(){
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
}

Color.prototype.hex = function(){
    const {r, g, b} = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
}

Color.prototype.rgba = function(a = 1.0){
    const {r, g, b} = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

color1 = new Color(255, 40, 100); 
color1.rgba(0.5)


class Color {
    // it automatically runs whenever we instantiate a new instance of Color (class)
    constructor(r, g, b, name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name; 
        this.calcHSL();
    }

    innerRGB(){
        const {r, g, b} = this;
        return `${r}, ${g}, ${b}`;
    }

    greet(){
        return `hello from ${this.name}`;
    }

    rgb(){
        // const {r, g, b} = this;
        return `rgb(${this.innerRGB()})`
    }

    rgba(a = 1.0){
        return `rgba(${this.innerRGB()}, ${a})`
    } 

    hex(){
        const {r, g, b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1); 
    }

	hsl() {
		const { h, s, l } = this;
		return `hsl(${h},${s}%, ${l}%)`;
	}
	fulllySaturated() {
		const { h, l } = this;
		return `hsl(${h},100%, ${l}%)`;
	}
	opposite() {
		const { h, s, l } = this;
		const newHue = (h + 180) % 360;
		return `hsl(${newHue},${s}%, ${l}%)`;
	}
	calcHSL() {
		let { r, g, b } = this;
		// Make r, g, and b fractions of 1
		r /= 255;
		g /= 255;
		b /= 255;

		// Find greatest and smallest channel values
		let cmin = Math.min(r, g, b),
			cmax = Math.max(r, g, b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;
		if (delta == 0) h = 0;
		else if (cmax == r)
			// Red is max
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			// Green is max
			h = (b - r) / delta + 2;
		else
			// Blue is max
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		// Make negative hues positive behind 360°
		if (h < 0) h += 360;
		// Calculate lightness
		l = (cmax + cmin) / 2;

		// Calculate saturation
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

		// Multiply l and s by 100
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);
		this.h = h;
		this.s = s;
		this.l = l;
	}
}

const red = new Color(255,67,89,'tomato');
const white = new Color(255,255,255,'white');



// Inheritance
class Pet {
    constructor(name, age){
        console.log('in pet constructor')
        this.name = name; 
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`
    }
}

class Cat extends Pet { 
    constructor(name, age, livesLeft = 9){
        console.log('in cat constructor');
        super(name, age);
        this.livesLeft = livesLeft;
    }

    meow(){
        return 'Meow'
    }
}

class Dog extends Pet { 
    bark(){
        return 'woof'
    }

    // this is priotized when called 
    eat(){
        return `${this.name} scarfs his food`
    }
}