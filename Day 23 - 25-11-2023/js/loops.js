// let counter = 1 ;
// while(counter >= 10){
//     console.log(counter);
//     counter++;
// }
// console.log('end of loop');

// // start, condition , step
// let c= 1;
// do{
//     c++;
//     // c = 9
//     if(c % 3 == 0){
//         continue
//     }


//     if (c== 9){
//         break;
//     }
//         console.log(c);
// }while(c < 10)

// i  = 0 => 1
for (let i = 0; (i <= 10) && (i % 2 == 0); i++) {

    // 0,2,4,6,8,10
    // if(i == 5){
    //     continue;
    // }
    // if(i == 7 ){
    //     break;
    // }
    console.log(`i = ${i}`);
    // js



    // i++;
}

console.log('end of loops');

// write js code to sum 3 and 5 multiplies under 1000 [3 inputs [1000,5,7]]

const targetElement = document.getElementById('target')
const input1 = document.getElementById('inp1')
const input2 = document.getElementById('inp2')
const btnOne = document.getElementById('btn-1')
const resDiv = document.getElementById('res-1')
const evenbtn = document.getElementById('even-btn')


btnOne.onclick = function () {
    let targetValue = targetElement.value;
    let inp1Value = input1.value;
    let inp2Value = input2.value;
    let sum = 0;

    for (let i = 1; i < targetValue; i++) {
        if (i % inp1Value == 0 || i % inp2Value == 0) {
            sum += i;
        }
    }
    resDiv.textContent = `Sum = ${sum}`
}

// print even values between two numbers [50 , 5]
evenbtn.onclick = function () {
    let n1 = parseInt(input1.value)
    let n2 = parseInt(input2.value)
    
    let end = n1 > n2 ? n1 : n2;
    let start = n1 < n2 ? n1 : n2;
    for (let i = start; i < end; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
