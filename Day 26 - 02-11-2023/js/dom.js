// dom => document object model
// document = web page

console.log(document);
console.dir(document)

console.log(document.children);
console.log(document.children[0]);
console.log(document.children[0].children);
console.log(document.children[0].children[1]);


// common attributes 
console.log(document.title);
document.title = 'Dom | Page'
console.log(document.title);

let pageBody = document.body
console.log(pageBody);

let allForms = document.forms
console.log(allForms);
console.log(allForms[0]);

let allAnchors = document.links
console.log(allAnchors);
console.log(allAnchors[2]);
console.log(allAnchors.length);


let allImages = document.images
console.log(allImages);

let allStyles =  document.styleSheets
console.log(allStyles);

// selection
// 1- id  => return one element
let firstForm = document.getElementById('form-1');
let secondForm = document.getElementById('form-2');
let firstDiv = document.getElementById('div-1');
let myDiv = document.getElementById('div-10');
console.log(firstForm,secondForm, firstDiv);
console.log(myDiv);

// 2- className  => list
let allCls = document.getElementsByClassName('cls')
let allDataX = document.getElementsByClassName('datax')
let allData = document.getElementsByClassName('data')
console.log(allCls);
console.log(allCls[0]);
console.log(allDataX);
console.log(allData);

// 3- tag name  => list
const allDivs = document.getElementsByTagName('div')
console.log(allDivs);
console.log(allDivs[0]);

const allLinks = document.getElementsByTagName('a')
console.log(allLinks);

// 4- name   => list
let allGenders = document.getElementsByName('gender')
console.log(allGenders);

// css selectors
// 5 - queryselector => one element
let firstCls = document.querySelector('.cls')
console.log(firstCls);

let firstNestedPar = document.querySelector('div p')
console.log(firstNestedPar);

// 6 - querySelectorAll  => return list
let allNestedPars = document.querySelectorAll('div p')
console.log(allNestedPars);

let allClsEles = document.querySelectorAll('.cls')
console.log(allClsEles);