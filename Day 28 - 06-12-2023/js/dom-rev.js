const mybtn = document.getElementById('btn-click');
const myInput = document.getElementById('user-input');

mybtn.addEventListener('click' , function(e){
    console.log(e);
    console.log(e.target);
    // e.target.classList
    // mybtn = this = e.target
}  )

myInput.addEventListener('keyup' , function(e){
    console.log(e);
    console.log(e.target);
    // e.target = this = myInput
})