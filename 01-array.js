// let myFriends = ['vinay', 'raj', 'manish', 'thakur', 'kamal', 'ashish', 'manish'];
// console.log(myFriends.length);
// console.log(myFriends[3]);

// =============================================================

// For in Loop -- index

// for (index in myFriends) {
//     console.log(index);
// }

// =============================================================

// For of Loop -- values

// for (el of myFriends) {
//     console.log(el);
// }

// =============================================================

// forEach Loop -- element, index, array
// break doesn't work
// return undefined

// let foreach = myFriends.forEach((el, index, arr) => {
//     console.log(`Index: ${index} Value: ${el} Array: ${arr}`);
// });
// console.log(foreach);

// =============================================================

// Searching and Filter in Array

// =============================================================

// Array.prototype.indexOf( String, fromIndex);
// forward search/traversal
// return onTrue = indexNumber, onFalse = -1 

// console.log(myFriends.indexOf('manish', 3));

// =============================================================

// Array.prototype.lastIndexOf( String, fromIndex);
// backward search/traversal
// return onTrue = indexNumber, onFalse = -1

// console.log(myFriends.lastIndexOf('manish'));

// =============================================================

// Array.prototype.includes( String, fromIndex);
// case sensitive
// return onTrue = true, onFalse = false

// console.log(myFriends.includes('manish'));

// =============================================================

// Array.prototype.find((elem, index, arr);
// return onTrue = return only first element, 
// onFalse = undefined

// let price = [100, 200, 300, 400, 500, 600, 700, 800, 900];

// let element = price.find((elem, index, arr) => {
//     return elem < 100;
// });

// or

// let element = price.find((elem, index, arr) => elem < 100);

// =============================================================

// Array.prototype.find((elem, index, arr);
// return onTrue = return only first index, 
// onFalse = -1

// let element = price.findIndex((elem, index, arr) => elem > 1100);

// console.log(element);

// =============================================================

// Array.prototype.filter();

// Array.prototype.find((elem, index, arr);
// return onTrue = array of element which satisfy the condition, 
// onFalse = empty array

// let resultArr = price.filter((elem, index, arr) => {
//     return elem < 500;
// });

// console.log(resultArr);

// =============================================================

// array.prototype.map();

// Array.prototype.map((elem, index, arr);
// return onTrue = a new array containing the result of calling function
// allow chaining method

// const newPrice = price.map((el, index, arr) => {
//     return el * 4;
// });

// console.log(newPrice);
// console.log(price);

// =============================================================

// array.prototype.reduce();

// Array.prototype.reduce((accumulator, element, index, arr);
// flatten 2d or 3d array

//const sum = price.reduce((acc, el) => acc += el);

//initial value for accumulator
// let extraPrice = 700;

// const sum = price.reduce((acc, el) => {
//     return acc += el
// }, extraPrice);

// console.log(sum);
// console.log(price);

// =============================================================

// CRUD in array

// =============================================================

// const animal = ['pigs', 'goat', 'sheep'];

// push add element in the end of array
// return new length of array
// console.log(animal.push('chichen'));
// console.log(animal);


// unshift add element in the start of array
// return new length of array
// console.log(animal.unshift('chichen'));
// console.log(animal);


// pop delete element in the end of array
// return deleted element of array
// console.log(animal.pop());
// console.log(animal);


// shift delete element in the start of array
// return deleted element of array
// console.log(animal.shift());
// console.log(animal);

// =============================================================

// splice method

// array.splice(start, deleteCount, strToAdd)
// update the original array
// returns deleted element of array

// const months = ['Jan', 'march', 'April', 'June', 'July'];

// Add Dec at the end of an array

// const newMonth = months.splice(months.length, 0, 'Dec');
// console.log(months);
// console.log(newMonth);

// Update 'march' to 'March'

// const newMonth = months.splice(months.indexOf('march'), 1, "March");
// console.log(months);
// console.log(newMonth);

// =============================================================
