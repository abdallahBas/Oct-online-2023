let t1 = setTimeout(function () {
    // document.write('Time out setting')
    console.log('Time out setting');
}, 3000)

let t2 = setTimeout(display, 5000);

let g = setTimeout(showData, 4000, 'ali', 'ali@gmail.com');

function display() {
    // document.write(`<br>Welcome to timeout`)
    console.log(`Welcome to timeout`);
}

function showData(name, email) {
    // document.write(`<br> 
    // <div>
    //     <h2> Name :  ${name}</h2>
    //     <p>Email : ${email}</p>
    // </div>
    // `)
    console.log(`Name ${name}
    Email ${email}`);
}

const clearBtn = document.getElementById('clr-time')
clearBtn.addEventListener('click', function () {
    clearTimeout(g)
    clearInterval(s1)
})

// setInterval
let counter = 1;
let s1 = setInterval(function () {
    console.log(`Iteration Number ${counter++}`);
}, 2000);

// 
const inputText = document.getElementById('inp')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resDIv = document.getElementById('res');
let co;
startBtn.addEventListener('click', () => {
    resDIv.textContent = inputText.value;
    co = setInterval(function () {
        resDIv.textContent -= 1;
        if(resDIv.textContent == '0'){
            clearInterval(co)
        }
    }, 1000)
})

stopBtn.addEventListener('click', function () {
    clearInterval(co)
})