

let data = [10,20,30,20,40,20,10,30,50,60];
// set => unique values 
let dataSet = new Set(data)
console.log(data);
console.log(dataSet);

let mySet =  new Set()

dataSet.add(56)
mySet.add(1)
mySet.add(3).add(9).add(5)

console.log(dataSet);
console.log(mySet);

mySet.delete(3)
console.log(mySet);

console.log(mySet.has(3));
console.log(mySet.has(9));

mySet.clear()
console.log(mySet);
// --------------------------
let d1 = new Date();
let d2 = new Date("Oct 15 2023");

// Date methods
console.log(Date.prototype);

// Destructure
let marks = [10,20,30,50]
let a , b ,c ;
[a , b , d] = marks
console.log(a,b,d);