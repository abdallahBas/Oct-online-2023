console.log(location);
console.log(location.href);
console.log(location.hash);
console.log(location.host);
console.log(location.hostname);
console.log(location.protocol);
console.log(location.origin);

// alert()
// location.reload()
const reloadBtn = document.getElementById('rel-btn')
reloadBtn.addEventListener('click', ()=> {
    location.reload();
})


// assign(url) , replace (url) , href
// href , assign => store current entry in history
// replace => doesn't  stoore current entry in history

// History Object

console.log(history.length);

// back()  , forword() , go(number)  1 => forward  , -1 => back

