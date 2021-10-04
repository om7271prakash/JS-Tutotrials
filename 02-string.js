// =============================================================

// 1. Escape Character
// 2. Finding a String in a String
// 3. Seaching for a String in a String
// 4. Extracting String Parts
// 5. Replacing String Content
// 6. Extracting String Character
// 7. Other useful methods

// =============================================================

// let str = "simple string";
// let newStr = new String('class string');

// let arr = [1, 2, 3, 4];
// let newArr = new Array(1, 2, 3, 4);

// console.log(typeof str);
// console.log(typeof newStr);
// console.log(typeof arr);
// console.log(typeof newArr);

// =============================================================

// indexOf() finds first occurence 
// return true = index, false = -1

// let myData = 'my name is Om Prakash Thakur';

// console.log(myData.indexOf('x', 5));

// =============================================================

// String.prototype.search(regexp)
// return true = index, false = -1

// let myData = 'my name is Om Prakash Thakur';

// console.log(myData.search('Thakur'));

// =============================================================

// slice(start, end)
// substring(start, end)
// substr(start, length)

// let myData = 'my name is Om Prakash Thakur';

// console.log(myData.slice(11, 13));
// console.log(myData.slice(11, -3));

// console.log(myData.substring(11, 13));
// console.log(myData.substring(11, -3));

// console.log(myData.substr(11, 13));
// console.log(myData.substr(-13));

// =============================================================

// String.prototype.replace(searchFor, replaceWith)
// Replacing string character

// console.log(myData.replace('Om', 'Kamal'));
// console.log(myData);

// =============================================================

// charAt(position) return value of particular index
// charCodeAt(position) return UNICODE at particular index
// proper access eg. str[]

// =============================================================

// str.toUpperCase();
// str.toLowerCase();
// fName.concat(' ', lName);
// str.trim();   remove white space before start and after end
// str.split(',');  string to array seperated by ','
// str.split(' '); string to array seperated by ' '
// str.split('|'); string to array seperated by |

// =============================================================
