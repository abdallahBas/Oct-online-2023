// innerHTML vs textContent

const myDiv = document.getElementById('my-div')
const myDivTwo = document.getElementById('my-div-two')
const myDivThree = document.getElementById('my-div-three')
console.log(myDiv);
console.log(myDiv.innerHTML);
console.log(myDiv.textContent);

myDivTwo.textContent = `
<h3>new title</h3>
<p> this is new par </p>
`

myDivThree.innerHTML = `
<h3>new title</h3>
<p> this is new par </p>
`

let firstH1 = document.querySelector('h1')
firstH1.id = 'h1-100'
firstH1.title  = 'h1 title'
firstH1.className = 'cls'

const changePicBtn = document.getElementById('change-pic')
let myImg = document.querySelector('img')
changePicBtn.onclick = function(){
    myImg.src = 'images/download.png'
    myImg.alt = 'new alternative'
}

// add attributs 
// built-in  vs Custom
const myinput = document.querySelectorAll('input')
myinput[0].placeholder = 'my place holder'

myinput[0].pattern = '{\D+}'

// myinput[0].data = 'text'
myinput[0].setAttribute('data' , 'my custom attribute')
myinput[0].setAttribute('title' , 'input title')

console.log(myinput[0].data);
console.log(myinput[0].title);
console.log(myinput[0].getAttribute('data'));
console.log(myinput[0].getAttribute('title'));

// print all attributes
console.log(myImg.attributes);
console.log(myinput[0].attributes);

// contains a specific attribute
console.log(myinput[0].hasAttribute('src'));
console.log(myinput[0].hasAttribute('data'));

// contains attibutes
console.log(myinput[0].hasAttributes());
console.log(document.querySelector('section').hasAttributes());

console.log(myinput[0].pattern);
myinput[0].removeAttribute('pattern')
console.log(myinput[0]);
console.log(myinput[0].pattern);

let side = document.querySelector('aside')

