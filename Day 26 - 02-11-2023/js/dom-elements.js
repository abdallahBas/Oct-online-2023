let pElement1 = document.createElement('p')
pElement1.textContent = 'paragrah 2 in my js'

document.body.appendChild(pElement1)

let p2 = document.createElement('p')
let pText = document.createTextNode('this is par text node')
p2.appendChild(pText)
document.body.appendChild(p2)

const container = document.querySelector('.container')
for (let i = 1; i <= 6; i++) {
    let myDiv = document.createElement('div')
    myDiv.className = 'item'
    myDiv.textContent = `Item  ${i}`
    container.appendChild(myDiv)
}
