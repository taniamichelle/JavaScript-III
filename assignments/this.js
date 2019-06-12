/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object: in global scope, .this will refer to the window/console Object
* 2. Implicit Binding: allows us to call the object directly left of the dot 
* 3. New: when you invoke a function with 'new' followed by an object name with the first letter capitalized, .this will refer to the newly constructed object
* 4. Explicit: allows us to explicitly state what .this refers to in any given function
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayAge(age) {
    console.log(this.age);
    return age;
};

console.log(sayAge(42));


// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Hi, ',
    sayHi: function (name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
};

myObj.sayHi('The Answer to Life');


// Principle 3
// code example for New Binding
function Person(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.speak = function () {
        return `Hi, my name is ${this.name}`;
    };
};

const mark = new Person({
    name: 'Mark',
    age: 32
});
console.log(mark.speak());


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