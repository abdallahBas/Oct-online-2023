const txtInput = document.getElementById("msg-input");
const srchInput = document.getElementById("srch-input");
const srchBtn = document.getElementById('srch-btn')
const resDiv = document.getElementById('res')


// resDiv.textContent = "ajsgdjagsj";

srchBtn.onclick = function(){
    // resDiv.textContent= txtInput.value.indexOf(srchInput.value)
    let str = txtInput.value;
    resDiv.textContent  = txtInput.value.indexOf(srchInput.value)
}

// return -1 if not found , index if found
// indexOf(string , start?)

let msg = "hello from string chapter in javascript"
document.write(`<br> ${msg} <br>`)

document.write(`${msg.indexOf('z')} <br>`)
document.write(`${msg.indexOf('a')} <br>`)
document.write(`${msg.indexOf('a' ,  22)} <br>`)
document.write(`${msg.indexOf('ter in')} <br>`)
document.write(`${msg.indexOf('ter ing')} <br>`)

// lastIndexOf(string , end?)
document.write('last index <br>')
document.write(`${msg.lastIndexOf('a')} <br>`)
document.write(`${msg.lastIndexOf('amd')} <br>`)
document.write(`${msg.lastIndexOf('a' , 25)} <br>`)

// slice (start ? , end ?) => end not included
document.write('<hr>slice <br>')
document.write(`Slice : ${msg.slice()} <br>`)
document.write(`Slice : ${msg.slice(5)} <br>`)
document.write(`Slice : ${msg.slice(5, 12)} <br>`)
document.write(`Slice : ${msg.slice(15, 12)} <br>`)
document.write(`Slice : ${msg.slice(-5 , -2)} <br>`)

document.write('<hr>substring <br>')
// substring
document.write(`subdtring: ${msg.substring()} <br>`)
document.write(`subdtring: ${msg.substring(5)} <br>`)
document.write(`subdtring: ${msg.substring(5,12)} <br>`)
// swap
document.write(`subdtring: ${msg.substring(15,12)} <br>`)
document.write(`subdtring: ${msg.substring(-5,-2)} <br>`)

// substr(start? , lenght?)
document.write('<hr>substr <br>')
document.write(`substr: ${msg.substr()} <br>`)
document.write(`substr: ${msg.substr(5)} <br>`)
document.write(`substr: ${msg.substr(5, 10)} <br>`)
// repeat(number)
document.write(`<h1> heading </h1>`.repeat(3))

// includes(string , start)
document.write("<hr> includes <br>")
document.write(`${msg.includes('ali')} <br>`)
document.write(`${msg.includes('script')} <br>`)
document.write(`${msg.includes('string')} <br>`)
document.write(`${msg.includes('string' ,  20 )} <br>`)

// startsWith(string , start ? )
document.write("<hr> starts with <br>")
document.write(`${msg.startsWith('h')}<br>`)
document.write(`${msg.startsWith('hel')}<br>`)
document.write(`${msg.startsWith('helo')}<br>`)
document.write(`${msg.startsWith('string')}<br>`)
document.write(`${msg.startsWith('string' , 11)}<br>`)

// endsWith (string, end?)
document.write("<hr> ends with <br>")
document.write(`${msg.endsWith('script')} <br>`)
document.write(`${msg.endsWith('script' , 30)}`)

document.write("<hr> splits <br>")
// split(delimiter , limit)
document.write(`${msg.split()}<br>`)
document.write(`${msg.split("")}<br>`)
document.write(`${msg.split(" ")} <br>`) 
document.write(`${msg.split(" ", 3)} <br>`) 