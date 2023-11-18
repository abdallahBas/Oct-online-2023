/*
Data Types 
"ali ahmed"   => string
20            => number
true / false  => boolean
[]            => array
{}            => object    
undifined
null
*/

console.log(typeof 25);
console.log(typeof (6.25));
console.log(typeof ("6.25"));
console.log(typeof ("true"));
console.log(typeof (true));

// variables 

var age = 0;


// y = age + 30;
// z = age + 5 ;
// t = age + 14;
// f = age + 4;

// naming convension
/*
conatins a-z A-Z 0-9 _ , $
start with letter or _ , $
can't contains special char
camel case [more than word]
*/

var $firstName$ = 20;
var departmentLocation;

// var vs let vs const 
// ES6  [let , const]

// var  = [let , const]
// declare
var num1;
console.log(num1);
console.log(x1);   // undefined
var x1 = 20;
console.log(x1);
var x1 = "ok";
console.log(x1);


// console.log(x2);  // error
let x2 = 50;
console.log(x2);

let x3;
x3 = 50;
x3 = 70
x3 = 700;

// assignment   => = 
const pi = 3.14;
// pi = 70;  // error

console.log(x3);


// string concatenation

let msg = "first" + "second" + x3  + "end";

let firstName = "ali", lastName = "Ahmed", level = 6, gpa, department = "cs";
firstName = "aya"
let fullName = firstName + " " + lastName;
let fullName2 = `${firstName} ${lastName}`

// document.write(" <div>  <h1> Full Name : " + fullName + "</h1>" )
// document.write("<p> Level : " + level + "</p>")
// document.write("<p> Department : " +department + "</p>  </div>")
document.write(`<section class ="container">`)
document.write(" <div >  <h1> Full Name : " + 
fullName + "</h1> <p> Level : " + level + 
"</p> <p> Department : " +department + 
"</p>  </div>")


// ES6 => string literals
let msg1 = `
<div>
    <h1> Full Name : ${fullName2} </h1>
    <p> Level : ${level}</p>
    <p> Department :  ${department} </p>
</div>
`
document.write(msg1)
document.write(`<div class = "cls">
    <h1> Full Name : ${fullName2} </h1>
    <p> Level : ${level}</p>
    <p> Department :  ${department} </p>
</div>
`)
document.write("</section>")