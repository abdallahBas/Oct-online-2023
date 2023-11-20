let num1 = 1000000;
let num2 = 1_000_000
let num3 = 10 ** 6
let num4 = 1e6
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

// number methods

let num1Str = num1.toString()
console.log(num1);
console.log(num1Str);

let res = 10 / 3;
// toFixed => return string
document.write(`Price : ${res}<br>`)
document.write(`Price : ${res.toFixed()} <br>`)
document.write(`Price : ${(85.95).toFixed()} <br>`)
document.write(`Price : ${(85.45).toFixed()} <br>`)
document.write(`Price : ${(85.95).toFixed(0)} <br>`)
document.write(`Price : ${res.toFixed(1)} <br>`)
document.write(`Price : ${res.toFixed(2)} <br>`)

document.write(235.689898.toPrecision(4), "<br>")
document.write(235.689898.toFixed(4) + "<br>")

console.log(parseInt("10"));
console.log(parseInt("10.56"));
console.log(parseInt("10Ali"));
console.log(parseFloat("10"));
console.log(parseFloat("10.56"));
console.log(parseFloat("10Ali"));

console.log(Number("50"))
console.log(Number("50.35"))
console.log(Number("50ABC"))

// checks if var is Integer
let n1 = 20  , n2 = "20";

console.log(Number.isInteger(20))
console.log(Number.isInteger(2020.25))
console.log(Number.isInteger("2020.25"))
console.log(Number.isInteger(n1))
console.log(Number.isInteger(n2))


// check if variable in number
console.log(Number.isFinite(n1));
console.log(Number.isFinite(n2));

// NaN
console.log(Number.isNaN(10 + undefined));
// app
const num1Input = document.getElementById('number1')
const num2Input = document.getElementById('number2')
const addBtn = document.getElementById('add-btn')
const subBtn = document.getElementById('sub-btn')
const resDiv = document.getElementById('res')

addBtn.onclick = function () {
    resDiv.textContent = `Result = ${parseFloat(num1Input.value) + parseFloat(num2Input.value)}`
}

subBtn.onclick = function () {
    resDiv.textContent = `Result =  ${num1Input.value - num2Input.value}`
}


// math => lib
console.log('math library functions');
console.log(Math.random());
console.log(Math.round(2.689));
console.log(Math.round(2.2689));
console.log(Math.ceil(22.1));
console.log(Math.ceil(22.9));
console.log(Math.floor(22.9));
console.log(Math.floor(22.1));
console.log(Math.trunc(25.9));
console.log(Math.pow(10,2));
console.log(Math.abs(10));
console.log(Math.abs(-10));
console.log(Math.max(20,1,4,5,80,1,4,5));
console.log(Math.min(20,1,4,5,80,1,4,5));