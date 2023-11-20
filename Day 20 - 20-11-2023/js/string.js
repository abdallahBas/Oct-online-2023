let msg = 'welcome to javascript [string chapter]'
document.write(`Msg = ${msg} <br>`)
document.write(`number of characters = ${msg.length} <br>`);

// zero-based indexing
let str = "yes"
// index    0   1   2
//        | y | e | s |
document.write(`number of characters = ${str.length} charcters`);

// accessing charcters
document.write(`<br>first char = ${msg[0]}`);
document.write(`<br>second char = ${msg[1]}`);
document.write(`<br>last char = ${msg[37]}`);
document.write(`<br>last char = ${msg[38]}`);
document.write(`<br>last char = ${str[3]}`);

// update [not]
msg[3] = "r";
document.write(`<br>Msg = ${msg} <br>`)

document.write(`<br> first char of msg = ${msg.charAt(0)}`)
document.write(`<br> last char of msg = ${msg.charAt(38)}`)

document.write("<hr>")
document.write(`${msg} <br>`)
document.write(`last char :  ${msg[msg.length -1]}<br>`)
msg += "end"
document.write(`${msg} <br>`)
document.write(`last char :  ${msg[msg.length -1]}<br>`)
document.write(`last char :  ${msg[-1]}<br>`)


// string functions 
//1-  trim() . trimStart() , trimLeft() , trimEnd() , trimRight()
let str1 = '   charcters   ';
console.log(str1);
console.log(str1.trim());
console.log(str1.trimStart());
console.log(str1.trimEnd());

// 
console.log(str1.toLocaleLowerCase());
console.log(str1.toLocaleUpperCase());

