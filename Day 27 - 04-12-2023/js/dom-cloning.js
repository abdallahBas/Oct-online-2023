const originalDiv = document.getElementById('original');
let counter = 1;
originalDiv.addEventListener('click' , function() {
    const clonedDiv = originalDiv.cloneNode(true);
    clonedDiv.classList.add('cloned')
    clonedDiv.id = `cloned-${counter}`
    clonedDiv.textContent = `I'm cloned div #${counter++}`
    document.body.appendChild(clonedDiv)
})

document.addEventListener('click' , function(e){
    // console.log(e.target.id);
    if (e.target.id.startsWith('cloned')){
        console.log(`I'm cloned # ${e.target.id[e.target.id.length-1]}`);
    }
})