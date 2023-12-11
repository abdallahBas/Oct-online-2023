const containerElement = document.getElementById("container")

const usr = document.createElement('div')
const tit = document.createElement('h3')
const dec = document.createElement('p')
const skills =document.createElement('p');
const profile =document.createElement('button');

tit.textContent = "Ali Ahmed";
dec.textContent = "I'm Fullstack Developer";
skills.textContent = ["HTML","CSS", "Javascript"].join(" | ");
profile.textContent = "See Profile";
usr.append(tit,dec,skills, profile)
usr.classList.add('user')
containerElement.appendChild(usr)


const user = {
    firstName : "Aya",
    lastName :"Mahmoud",
    desc:"I'm Front End developer",
    skills : ["Bootstrap" , "Angular"]
}

console.log(user);
// convert from js to json
let serverObj  = JSON.stringify(user)

console.log(serverObj);
// json to js
let userObj = JSON.parse(serverObj)
userObj.address = "Menofia - Shebin Elkom";
userObj.desc = "I'm Fullstack developer";
// js to json
serverObj = JSON.stringify(userObj)
console.log(serverObj);


console.log(1);
console.log(2);
console.log(3);
setTimeout(function(){
    alert(4) 
}, 3000)
console.log(5);
console.log(6);
console.log(7);
console.log(8);



// Call stack  [LIFO]
// last in first out

/*

-------------------


------------------

-----------------
                
-------------------


*/


function f1(){
    console.log(`I'm F1 `);
}

function f2(){
    f1()
    console.log(`I'm F2 `);
}

function f3(){
    f2();
    console.log(`I'm F3`);
}


setTimeout(function(){
    console.log('a synchronous');
    console.log('web api');
}, 0 )

f3()