/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object: in global scope, .this will refer to the window/console Object
* 2. Implicit Binding: allows us to call the object directly left of the dot; used with object literals 
* 3. New: when you invoke a function with 'new' followed by an object name with the first letter capitalized, .this will refer to the newly constructed object
* 4. Explicit: allows us to explicitly state what .this refers to in any given function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayAge(age) {
    'use strict';
    console.log(this);
    return age;
};
console.log(sayAge(42));

//JOSH KNELL'S WINDOW/GLOBAL BINDING EXAMPLE: 
/*
function hello(param) {
    'use strict';
    console.log(this);
    return `I like to say: ${param}`;
}

console.log(hello('hello'));
*/

// Principle 2
// code example for Implicit Binding
const myObj = {
    introduce: 'Hi, ',
    sayHi: function (name) {
        console.log(`${this.introduce} my name is ${name}`);
        console.log(this);
    }
};

myObj.sayHi('The Answer to Life');


//JOSH KNELL'S IMPLICIT BINDING (functions) EXAMPLE: 
/*
*** cook is a method in our binding ***
const hobbit = {
     name: 'Samwise',
     food: 'taters',
     cook: function() {
         return `${this.name} loves to cook ${this.food}`;
     }
};

console.log(hobbit.cook();) --> "Samwise loves to cook taters"

const anything = {
    name: 'Samwise',
    food: 'taters',
    cook: function() {
        return `${this.name} loves to cook ${this.food}`;
    }
};

console.log(anything.cook();) --> prints same thing as hobbit.cook(); 
*** look at where the method was invoked and you will find your binding ***
*/


// Principle 3
// code example for New Binding
// function Person(attributes) {
//     'use strict';
//     this.name = attributes.name;
//     this.age = attributes.age;
//     this.speak = function () {
//         return `Hi, my name is ${this.name}`;
//     };
// };

const Mark = new Person({
    name: 'Mark',
    age: 32
});
console.log(Mark.speak());

//JOSH KNELL'S NEW BINDING EXAMPLE: 
/*
***CONSTRUCTOR FUNCTION: meant to build object literals; can be reused; capitalize first letter***

EXAMPLE 1:
function Animal(food) {
    this.food = food;
    this.eat = function() {
        console.log(`This animal likes to eat ${this.food}`);
    };
};

const zebra = new Animal('grass');
const lion = new Animal('meat');

console.log(zebra); --> prints Object {
                                eat: function(){},
                                food: "grass"
                               }
console.log(zebra); --> prints Object {
                                eat: function(){},
                                food: "meat"
                               }

zebra.eat(); --> "This animal likes to eat grass"
lion.eat(); --> "This animal likes to eat meat"


EXAMPLE 2: 
***PROTOTYPE and INHERITANCE***
*** methods are stored in .prototype ***
//the Base constructor fxn
function Parent(attributes) {
    //console.log(attributes);
    this.age = attributes.age;
    this.name = attributes.name;
    this.home = attributes.home;
    this.phrase = attributes.phrase;
};

//the Methods of the Parent
Parent.prototype.speak = function() {
    return `${this.name} says ${this.phrase}`;
}; 

function Child(childAttributes) {
    //Gain access to all properties/attributes in the Base (Parent) constructor
    Parent.call(this, childAttributes);
    this.toy = childAttributes.toy;
};

//Gain access to Parent prototype (Parent Methods)
Child.prototype = Object.create(Parent.prototype);

Child.prototype.play = function() {
    return `${this.name} plays with ${this.toy}`;
};

const fred = new Parent({
    age: 35,
    name: 'Fred',
    home: 'Bedrock',
    phrase: 'Yabba dabba do!'
});

const wilma = new Parent({
    age: 37,
    name: 'Wilma',
    home: 'Bedrock',
    phrase: 'Fred!'
});

const pebbles = new Child({
    age: 2,
    name: 'Pebbles',
    home: 'Bedrock',
    phrase: 'Mama!'
    toy: 'a rock doll'
});

console.log(Parent.prototype); --> prints "Fred says Yabba dabba do!"
                                          "Wilma says Fred!"
console.log(pebbles.play()); --> prints "Pebbles plays with a rock doll"
console.log(pebbles.speak()); --> prints "Pebbles says Mama!"
*/


// Principle 4
// code example for Explicit Binding
const sayName = function (lang1, lang2, lang3) {
    console.log(`My name is ${this.name} and I know ${lang1}, ${lang2}, and ${lang3}`)
};

const tania = {
    name: 'Tania'
};

const languages = ['English', 'French', 'Russian'];

sayName.apply(tania, languages);

//JOSH KNELL'S EXPLICIT BINDING (functions) EXAMPLE: 
/*
const person = {
    name: 'Jill'
};

const hobbit = {
    name: 'Frodo'
};

const skills = ['HTML', 'CSS', 'JS'];

function introduce(params) {
    return `Hello! My name is: ${this.name} and these are my skills: ${params}`;
};

** Results BEFORE adding more parameters to introduce function **
//.apply
console.log(introduce.apply(person, skills)); --> prints "Hello! My name is: Jill and these are my skills: HTML"
console.log(introduce.apply(hobbit, skills)); --> prints "Hello! My name is: Frodo and these are my skills: HTML"
//.call
console.log(introduce.call(person, skills)); --> prints "Hello! My name is: Jill and these are my skills: HTML, CSS, JS"

*** Results AFTER adding more parameters to introduce function ***
function introduce(skills1, skills2, skills3) {
    return `Hello! My name is: ${this.name} and these are my skills: ${skills1}, ${skills2}, ${skills3}`;
};

//.apply
console.log(introduce.apply(person, skills)); --> prints "Hello! My name is: Jill and these are my skills: HTML, CSS, JS"
//.call
console.log(introduce.call(person, skills)); --> prints "Hello! My name is: Jill and these are my skills: HTML, CSS, JS, undefined, undefined"

***SPREAD OPERATOR***
console.log(introduce.call(person, ...skills)); --> prints "Hello! My name is: Jill and these are my skills: HTML, CSS, JS"

//.bind
*** stores the .this for later use ***
const useLater = introduce.bind(person, ...skills);
console.log(useLater()); --> prints "Hello! My name is: Jill and these are my skills: HTML, CSS, JS"
*/