const leftbtn = document.getElementById('left-btn')
const leftbtn2 = document.getElementById('left-btn-2')
const div1 = document.getElementById('div-1');
const pass1Ele = document.getElementById('pass1')
const pass2Ele = document.getElementById('pass2')
const passRes = document.getElementById("res")
const daySelect = document.getElementById('day-select');
leftbtn.onclick = function (e) {
    console.log('left button clicked');
    console.log(e);
    console.log(e.target);
    console.log(e.target.textContent);
}
leftbtn2.onclick = leftClick;
function clickHere() {
    console.log('button clicked');
}
function leftClick() {
    console.log('left button 2 clicked ');
}
// right click
leftbtn.oncontextmenu = function () {
    console.log('middle button right clicked');
}
document.oncontextmenu = function (e) {
    e.preventDefault()
    console.log('document right clicked');
}
// hover
div1.onmouseenter = function () {
    console.log(this);
    this.classList.add('cls')
}
div1.onmouseleave = function () {
    this.classList.remove('cls')
    console.log(this);
}
// onkeydown 
pass1Ele.onkeyup = function (e) {
    // console.log(this.value);
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    pass2Ele.value = pass1Ele.value;
    if (this.value.length == 8) {
        console.log(this.value);
        this.setAttribute('maxlength', 8)
    }
}
pass2Ele.onkeyup = function () {
    if (this.value == pass1Ele.value) {
        passRes.textContent = "password matched"
        passRes.classList.add('match')
        passRes.classList.remove('dismatch')
    } else {
        passRes.textContent = "password not matched"
        passRes.classList.add('dismatch')
        passRes.classList.remove('match')

    }
}
for (let i = 1; i <= 31; i++) {
    let op = document.createElement('option')
    op.textContent = i;
    op.value = i;
    daySelect.appendChild(op)
}
daySelect.onchange = function (e) {
    console.log(this.value);
    console.log(e);
    console.log(e.target);
}
// onfocus / onblur
const form = document.querySelector('form')
const inFrm = document.querySelector('form input');

inFrm.onfocus = function () {
    console.log('input focused');
}
inFrm.onblur = function () {
    console.log('input blured');
}
form.onsubmit = function (e) {
    e.preventDefault()
    console.log('pass wrong');
}
// ----- tasks

const inputMsg = document.getElementById('msg')
const currentNumber = document.getElementById('current')

inputMsg.onkeyup = function () {
    currentNumber.textContent = 60 - this.value.length;
    if (currentNumber.textContent == '0') {
        this.maxLength = "60";
        this.style.outlineColor = "red";
    } else {
        this.style.outlineColor = "initial";

    }
    console.log(this.value.length);
}

const regForm = document.getElementById('reg')
const usernameInput = document.getElementById('user')
const passwordInput = document.getElementById('pass')
const regRes = document.getElementById('reg-res')

regForm.onsubmit = function (e) {
    if (usernameInput.value != 'admin' || passwordInput.value != '123') {
        e.preventDefault();
        regRes.textContent = 'Username or password incorrect'
        regRes.classList.add('dismatch')
        regRes.classList.remove('match')
        // alert('ok');
    }
}

passwordInput.onkeyup = function(){
    if (usernameInput.value == 'admin' && passwordInput.value == `123`){
        regForm.submit()
    }
}

usernameInput.onkeyup = function(){
    if (this.value == 'admin'){
        passwordInput.focus()
    }
}

const codeInputs = document.querySelectorAll('#code input')

codeInputs.forEach(function(ele, ind){
    ele.onkeyup = function(){
        if (ele.value.length ==1){
            codeInputs[ind+1].focus()
        }
    }
})

// window events
let counter = 1 ;
window.onresize = function(){
    console.log(`Resize = ${counter++}`);
}
window.onscroll = function(){
    console.log(`scroll =  ${counter++}`);
}
window.onload = function(){
    console.log('load event');
}

console.log('first');
console.log('second');