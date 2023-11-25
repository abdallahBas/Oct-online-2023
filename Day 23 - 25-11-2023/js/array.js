// 
let marks = [90, 80, 97, 86, 59]
console.log(marks);
console.log(`length (number of elements) = ${marks.length}`);
// Access اوصل للعنصر 
console.log(`first element = ${marks[0]}`);
console.log(`second element = ${marks[1]}`);
console.log(`last element = ${marks[marks.length - 1]}`);

// update 
marks[0] = 500
console.log(marks);

marks[7] = 10
console.log(marks);

// check type of array
console.log(Array.isArray(marks));
// search [indexOf , lastIndexOf , includes , slice] same as string 

// join(delimiter?)  => join elements of array and return string
let res = marks.join(" | ")
console.log(res);
console.log(marks);
marks.reverse()
console.log(marks);
marks.sort()
console.log(marks);

marks.sort((a, b) => a - b)
console.log(marks);


// add element
marks.unshift(1000)
console.log(marks);
marks.unshift(1, 11, 111)
console.log(marks);

marks.push(2000)
console.log(marks);
marks.push(2, 22, 222)
console.log(marks);
// delete element from array
let deletedItem = marks.shift()
console.log(marks);
console.log(deletedItem);
let d = marks.pop()
console.log(marks);
console.log(d);
// splice (index, deletedCounts , items to add)
let data = [10, 20, 30, 40, 50, 60]
console.log(data);
data.splice(2, 1)
console.log(data);
data.splice(3, 0, 100, 200, 300)
console.log(data);
data.splice(2, 2, 5, 6, 7)
console.log(data);

let item = 20000;
if (data.includes(item)) {
    data.splice(data.indexOf(item), 1)
    console.log(`${item} deleted successfully`);
} else {
    console.log(`${item} not found in the array`);
}
let ar1 = [1, 2, 3]
let ar2 = [4, 5, 6]
let ar3 = [7, 8, 9]
let all = ar2.concat(ar1, ar3, 10, [11, 12])
console.log(all);


// mix
let mix = [1, 2, [500, 600, 700], true, "ali", [10, 20]]

// loop array
marks = [68, 99, 94, 72, 88, 66, 64, 78, 90, 94, 92, 54]
marks.push(91, 67, 87, 89, 93)
let sum = 0; // undefined
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    if (marks[i] >= 85) {
        console.log(`${i} => ${marks[i]}`);
    }
}

let s = 0;
for (let i of marks) {
    console.log(`item => ${i}`);
    s += i;
}
console.log(`Sum = ${sum}`);
console.log(`Sum = ${s}`);

for(let i in marks){
    console.log(`${i} => ${marks[i]}`);
}