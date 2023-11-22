
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');

// start , condition , step [increment / decrement / other]
let i = 1;

while (i <= 20) {
    if (i % 2 == 0) {

        console.log(i); // 1 2 3 4 ... 19 20
    }
    i++;
}

console.log('---------------');
const containerDiv = document.getElementById('container')
let k = 1;
while (k <= 50) {

   
    //     containerDiv.innerHTML += `
    //     <div class="product">
//     <h1>title ${k}</h1>
//     <p>Lorem ipsum dolor sitsed odit quod rerum cumque, numquam assumenda nisi.</p>
//     <a href="">Ser more</a>
// </div>
// `

    k++;
    if (k % 2 == 0 ){
        console.log("cont.");
        continue  // exist the current iteration/s
    }

    if(k == 35){
        break;  // exist the overall loop
    }
    console.log(k);
    
}

console.log('end of loop');