let obj = {
    fName: 'Om Prakash',
    lName: 'Thakur',
    fullName: function () {
        return `My name is ${this.fName} ${this.lName}`;
    }
}

// console.log(obj);
// console.log(Object.values(obj));
// let entry = Object.entries(obj);
// console.log(Object.fromEntries(entry));

console.log(obj.fullName());