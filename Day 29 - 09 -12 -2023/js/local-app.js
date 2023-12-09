const allLis = document.querySelectorAll('ul li')
const myDiv = document.querySelector('div')
console.log(allLis[0].dataset);
console.log(allLis[0].dataset.color);
console.log(allLis[0].dataset["club"]);


if(localStorage.getItem('color')){
    myDiv.style.backgroundColor = localStorage.getItem('color');
    allLis.forEach(ele => {
        ele.classList.remove('li-active')  
    })
    let currrentElement = 
    document.querySelector(`[data-color=${localStorage.getItem('color')}]`)
    currrentElement.classList.add('li-active')
}
allLis.forEach(ele => {
    ele.addEventListener('click' , ()=> {

        // remove active class from all lis
        allLis.forEach(ele => {
            ele.classList.remove('li-active')
        })

        // add active class to cliked li
        ele.classList.add('li-active')
        localStorage.setItem('color', ele.dataset.color)
        myDiv.style.backgroundColor = localStorage.getItem('color');
    })
})