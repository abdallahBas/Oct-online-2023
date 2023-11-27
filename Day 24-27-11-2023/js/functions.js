// block of code excuted more times
// function executed when it called , invoke , trigger
// DRY => Don't Repeat Yourself

function sayWelcome(){
    console.log('Hello');
}

sayWelcome()
sayWelcome()
sayWelcome()
sayWelcome()
console.log('ghghj');
sayWelcome()

console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');
console.log('welcome');

// parameters 
function sayHello(name){
    console.log(`welcome  ${name}`);
}

sayHello('ahmed')
sayHello('sayed')
sayHello('sara')

// parameters
function displayData(id, name = "no name" , level , gpa = 2){
    console.log(`Student Id = ${id}
    Student Name = ${name}
    Student Level = ${level}
    Student gpa = ${gpa}`);
}

// arguments
displayData(1 , 'ali ahmed' , 4 , 3.9)
displayData(2 , 'alyaa ahmed' , 3)
displayData(3 , 5)

function add(n1 , n2){
    console.log(n1 + n2);
}
function addnumbers (n1 , n2 , n3){
    console.log(n1 + n2 +n3);
}

function getArraySum(marks  ){
    let sum = 0;
    for(mk of marks)   {
        sum += mk;
    }
    return sum
    console.log('welcome');
}

let marks = [80,70,90,60]
let salalries =[1000,4000,8000,6000 , 4000]
let products = [40,70,60,2,14]

getArraySum(marks)
getArraySum(salalries)
getArraySum(products)

// rest parametr
console.log(1 , 2 , 3 , "ali")

function getSum( a , b, ...numbers){
    // console.log(Array.isArray(numbers));
    // console.log(numbers);
    getArraySum(numbers)
    let max =  numbers[0];
    for(item of numbers){
        if (item > max){
            max = item;
        }
    }

    console.log(max);
    return "li"
}

let sm = getSum(10,40,5,6,8,41)
// return 


getSum(4,5,8,7)

function getStatistics(arr){
    let sum = 0 , avg = 0 , max = arr[0] , min = arr[0]
    for (item of arr){
        sum += item;
        if(item >max){
            max = item
        }else if(item < min){
            min = item
        }
    }

    avg = sum / arr.length

    return [sum ,avg , min , max]
}


// nested function
// Sara Ahmed Zahran
// sara ahmed zahran
// SaRa AHMed ZAhRAn
// Sara A.Zahran

function manipulateName(first , middle ,last){

    function manipulateFirst(){
        return `${first[0].toUpperCase()}${first.slice(1).toLowerCase()}`
    }

    function manipulateMiddle(){
        return `${middle[0].toUpperCase()}.`
    }

    function manipulateLast(){
        return `${last[0].toUpperCase()}${last.slice(1).toLowerCase()}`
    }
 
// 
    return `${manipulateFirst()} ${manipulateMiddle()}${manipulateLast()}`
}


let res =manipulateName('sAra' , 'ahmed' , 'ZahRAn')
console.log(res);


// anonymous functions  [has no name]

const myBtn = document.getElementById('btn')
myBtn.onclick = function (){
    console.log('button clicked');
}

// console.log(`calc 2 =  ${calc(4,5)}`);  // error

// created in runtime
let calc = function(a , b){
    return a +b;
}

console.log(`calc 2 =  ${clac2(4,5,7)}`);


function clac2 (a , b , c){
    return a + b +c;
}

// created in runtime
let calc3 = (a , b) => a +b;
let add10 = n => n+10;

let max = (n1 , n2 ) => n1>n2? n1:n2;
console.log(max(5,9));

function maxNumber(a , b){
    if (a > b){
        return a
    }else {
        return b
    }
}

function getEvens(num){
    let even =[];
    for(item of num){
        if (item%2 == 0){
            even.push(item);
        }
        if (item == 10){
            return even;
        }
    }

    console.log('end of loop');
    return even;
}


