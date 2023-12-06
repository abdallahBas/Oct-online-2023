/* 
hof => higher order functions  [map , filter , reduce , forEach]
hof (a, b , function(x , y)  )
*/

// map (  function(element , index? , array?), this ?  )

let salaries = [5000,6000,7000,9000,6000];
let newSals =[];
for (let sal of salaries){
    newSals.push(sal * 1.2)
}
console.log(salaries);
console.log(newSals);

console.log('-------------------------');
let sals = salaries.map(function(arr , ind , ele){
    console.log(`Element =  ${arr}, Index =  ${ind} , Array = [${ele}]`);
    return 6;
} , 60)

let netSals = salaries.map( function(ele) {
    return ele * 1.2
})

let netSals2 = salaries.map( ele =>  ele * 1.2 )
console.log(salaries);
console.log(netSals);
console.log(netSals2);

// words = ['do' , "see" , 'go' ]  => ['doing' , 'seeing' , 'going']

let words = ['do' , "see" , 'go' ];
let wordsTwo = words.map(     ele => `${ele}ing`   )

function addSuffix(arr , suff){
    return arr.map( ele => `${ele}${suff}`)
}

let addSuffix2 = (arr , suff) => arr.map( ele => `${ele}${suff}`)

let numbers = [1,2,3,4,5]
console.log(numbers);
numbers = numbers.map(e => e**2) 
console.log(numbers);