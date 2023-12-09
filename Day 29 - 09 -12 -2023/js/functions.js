const openbtn = document.getElementById('open')
const printbtn = document.getElementById('print')
const closebtn = document.getElementById('close')

openbtn.addEventListener('click' , _ => {
    // open('https://www.google.com', '_blank' )
    open('https://www.google.com', '_blank' , "width=400, height=200, left=300, top=200")
})

// stop(), reload()

printbtn.addEventListener('click' , ()=> {
    print()
})
closebtn.addEventListener('click' , ()=> {
    close()
})

// scrollX

console.log(scrollX);
console.log(scrollY);

scrollTo(100,100)
scrollTo(100,100)
scrollBy(300,300)
scrollBy(300,300)

scrollTo({left:0 , top:0 , behavior:"smooth"})

const upBtn = document.getElementById('up-btn')

window.addEventListener('scroll' , function(){
    // console.log(scrollY);
    if (this.scrollY >= 600){
        upBtn.classList.remove('hid')
    }else{
        upBtn.classList.add('hid')
    }
})

// window.onscroll = function(){
    
// }


upBtn.addEventListener('click' , function(){
    scrollTo({left:0, top:0,  behavior:"smooth"});
})