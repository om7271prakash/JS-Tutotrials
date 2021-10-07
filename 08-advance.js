// -----------------------------------------------------------
// Event Propagation
// -----------------------------------------------------------

// The Event Propagation mode determines in which order the elements receive the event

// 1. Event Capturing(top to bottom)
// 2. Event Bubbling(bottom to top)

// to stop the propagation

// event.stopPropagation();

// third parameter false by default
// if true then it follows event capturing process
// if false then follows event bubbling process

// parent.addEventListener('click', funcName, true);

// -----------------------------------------------------------
// Higher Order and Callback Function
// -----------------------------------------------------------

// const sum = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

// const calculator = (num1, num2, operator) => operator(num1, num2);

// in bellow eg. calculator is 'Higher order function'
// in bellow eg. sum, sub, mul, div is "callback function"
// console.log(calculator(4, 7, mul));

// -----------------------------------------------------------
// Hoisting in JavaScript
// -----------------------------------------------------------

// creation phase -> execution phase

// eg.

// console.log(mame);
// var mame;
// mame = 'thakur';

// To

// var mame;
// console.log(mame);
// mame = 'thakur';

// let is not supporting hoisting

// -----------------------------------------------------------
// Scope Chain and lexical scoping
// -----------------------------------------------------------

// lexical scoping: inner function can get access for parent function but not vice versa


let a = "Om Prakash";
const b = () => {
    a = 'Singh';
    c = () => {
        let name = 'thakur';
        return name;
    }
    return a + c();
}
console.log(a);
console.log(b());
console.log(b().c());

// -----------------------------------------------------------
// closure
// -----------------------------------------------------------
// Every time function invokes, closure created
// Save the variable values in inner function from outer funtion

// -----------------------------------------------------------
// Synchronous and Asynchronous
// -----------------------------------------------------------

