/*

reduce (  function(acc, curr , ind ? ,arr? ) {body} , initialValue?)
return one value 
return acc/prev
*/

let marks = [80, 90, 70, 60, 88]
let i = 1
marks.reduce(function (prev, curr, ind, arr) {
    console.log(`Previus/Accumlator =  ${prev}, current =  ${curr}, index = ${ind}, Arr = ${arr}`);
    return 500 + i++
})

let sum = marks.reduce(function (prev, curr) {
    console.log(`Prev = ${prev} , curr = ${curr}`);
    return curr + prev
})
console.log(sum);

let max = marks.reduce(function (acc, curr) {
    // if (acc > curr){
    //     return acc
    // }else {
    //     return curr
    // }

    return acc > curr ? acc : curr;
})
let min = marks.reduce((acc, curr) => acc < curr ? acc : curr);

console.log(marks);
console.log(max);
console.log(min);

// 

let txt = marks.reduce( (acc, curr)=> `${acc} | ${curr}`)
console.log(txt);
console.log(marks.join(" | "));