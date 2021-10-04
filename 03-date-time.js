// Date Method (get and set)
// Time Method (get and set)

// since 1 January 1970 UTC in the form of Miliseconds

// =============================================================

// 4 ways to create new Date object

// new Date();     constructor
// new Date(year, month, day, hours, minutes, seconds, milliseconds);        7 arguments max
// new Date(milliseconds);
// new Date(date string);

// =============================================================

// let currentDate = new Date();
// console.log(currentDate.toLocaleDateString());
// console.log(currentDate.toLocaleString());
// console.log(currentDate.toString());

// console.log(Date.now());

let newDate = new Date(2021, 0, 5, 10, 33, 59, 00);
console.log(newDate.toLocaleString());