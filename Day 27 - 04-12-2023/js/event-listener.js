const mybtn = document.getElementById('btn')
const mybtnEvent = document.getElementById('btn-event')

mybtn.onclick = function(){
    console.log('first step');
}

mybtn.onclick = f1;
mybtn.onclick = f2;
mybtn.onclick = 10;

function f1 (){
    console.log('function 1');
}
function f2 (){
    console.log('function 2');
}


myInput = document.querySelector('input')
myInput.addEventListener('keyup', () => {
    console.log(myInput.value);
    // console.log(this);
}  )

mybtnEvent.addEventListener('click' , function(){
    console.log('event 1');
    console.log(this);
}     )
mybtnEvent.addEventListener('click' , f1)
mybtnEvent.addEventListener('click' , f2)
mybtnEvent.addEventListener('click' , 10) // hint error

