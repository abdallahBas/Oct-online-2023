const parentElement = document.getElementById('parent')
const firstPar = document.querySelector('#parent p')
const secondPar = document.querySelectorAll('#parent p')[1]


// childs
console.log(parentElement.children);
console.log(parentElement.childNodes);

console.log(parentElement.firstChild);
console.log(parentElement.firstElementChild);

console.log(parentElement.lastChild);
console.log(parentElement.lastElementChild);

// Sibilings || Traversing
console.log(secondPar.nextSibling);
console.log(secondPar.nextElementSibling);

console.log(secondPar.previousSibling);
console.log(secondPar.previousElementSibling);

console.log(secondPar.parentElement);

let h1Ele = document.createElement('h1')
h1Ele.textContent = 'first h1';
let h1Ele2 = document.createElement('h1')
h1Ele2.textContent = 'second h1';
let h1Ele3 = document.createElement('h1')
h1Ele3.textContent = 'third h1';
let h1Ele4 = document.createElement('h1')
h1Ele4.textContent = 'fourth h1';
let h1Ele5 = document.createElement('h1')
h1Ele5.textContent = 'fivth h1';
// before after append prepend appendChild
parentElement.before("string 1" , "staring 2" , h1Ele, "string 3")
parentElement.after('end 1' , h1Ele2, 'end2' , 'end3')

parentElement.append(h1Ele3 , 'text1')
parentElement.prepend(h1Ele4 , 'text1-4')

parentElement.appendChild(h1Ele5, "str")

