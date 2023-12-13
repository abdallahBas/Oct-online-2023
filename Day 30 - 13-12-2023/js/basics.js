
"use strict"
// let number = 10 ;
// // numbr += 50 ;
// console.log(number);
// let private = 10 ;
// let userFirstName = "ali";
// console.log(userFirsName);

let hasDriversLicense= false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true
}
 if (hasDriversLicense){
    console.log('I can drive now');
 }
 const formLogin = document.querySelector('form')
 formLogin.onsubmit = function(e){
    e.preventDefault();

    let data = new FormData(formLogin)
    console.log(data);
    data.append('key' , 'value')
    console.log(data.get("username"));
    console.log(data.get("password"));
    console.log(data.get("key"));
    console.log('ok');
 }
