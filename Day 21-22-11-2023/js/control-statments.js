const ageInput = document.getElementById("vote-input")
const votrBtn = document.getElementById("vote-check")
const resDiv = document.getElementById('res')

let votingAge = 18;

votrBtn.onclick = function () {
    if (ageInput.value >= votingAge) {
        resDiv.textContent = 'ok., you are allowed to voting';
    } else {
        resDiv.textContent = 'sorry , you are not allowed to voting';
    }
}

let age = 20;
if (age > 15) {
    console.log('bigger');
} else {
    console.log('smaller');
}

if (age > 60) {
    console.log(`so big`);
} else if (age > 40) {
    console.log('big');
} else if (age > 20) {
    console.log('youth');
} else {
    console.log('sorry , not allowed');
}
console.log('mission complete');

// >= 85 => excellent
// >= 75 => V.G
// >= 65 => Good
// >= 50 => success
// <50   => fail

const input1 = document.getElementById('inp1')
const input2 = document.getElementById('inp2')
const checkBtn = document.getElementById('check')
const check5Btn = document.getElementById('mod-5')
const checkMarkBtn = document.getElementById('mark-check')
const rsDiv = document.getElementById('rs')

checkBtn.onclick = function () {
    let n1 = parseFloat(input1.value)
    let n2 = parseFloat(input2.value)
    if (n1 > n2) {
        rsDiv.textContent = `${n1} is greater than ${n2}`
    } else if (n2 > n1) {
        rsDiv.textContent = `${n2} is greater than ${n1}`
    } else {
        rsDiv.textContent = `${n2} is equal to ${n1}`
    }
}

check5Btn.onclick = function () {
    if (input1.value % 5 == 0) {
        rsDiv.textContent = `${input1.value} is multiple of 5`;
    } else {
        rsDiv.textContent = `${input1.value} is not multiple of 5`;
    }
}

checkMarkBtn.onclick = function () {
    let mark = parseFloat(input2.value);

    if (mark < 0){
        rsDiv.textContent = 'mark must be >= Zero';
        rsDiv.style.color = "blue";
    }
    else if (mark > 100) {
        rsDiv.textContent = 'mark must be <= 100';
    } 
    else {
        if (mark >= 50 && mark < 65) {
            rsDiv.textContent = 'success';
            rsDiv.style.cssText = `
                color:#fff;
                background-color: green;
                padding:8px;
                width:fit-content;
                `;
        } else if (mark >= 65 && mark < 75)
            rsDiv.textContent = ' good';
        else if (mark >= 75 && mark < 85) 
            rsDiv.textContent = 'very good';
        else if (mark >= 85) 
            rsDiv.textContent = 'Excellent';
         else 
            rsDiv.textContent = 'fail';
        
    }

    console.log('mission complete');
    console.log('------------');


    // ternary if | short hand if
    // let vr = condition ? true :false ;
    let vr = mark >= 50 ? "success":"fail";

    if (mark >= 50){
        vr = "success"
    }else{
        vr = "fail"
    }
    console.log(vr);
    mark >= 50 ? console.log("success"):console.log("fail");
    
}

