// filter attributes same as map 
// filter (callback(ele , ind? , arr?) , this ?)
// return new array 

let marks = [45,65,85,90,98,86,76,74,81,69,96]
let excs = [];
for (item of marks){
    if(item >= 85){
        excs.push(item)
    }
}
marks.filter(function(ele, ind ,arr){
    console.log(`ele = ${ele}, index = ${ind}, arr = [${arr}]`);
} , this)

let excs2 = marks.filter(function(ele){
    return ele >= 85
})

let excs3 = marks.filter(ele => ele>=85)
console.log(excs);
console.log(excs2);
console.log(excs3);

let salries = [10000,12000,6000,7000,13000,14000,8000]  // chaining

let sals = salries.filter(ele => ele > 10000).map(ele => ele * 1.05)
console.log(sals);
sals = salries.map(ele => ele * 1.05).filter(ele => ele >= 10000)
console.log(sals);

let names = ['Sally','sara','ahmed','Amgad' , 'samir', 'laila' ,'loay']

function getNames (arr , str){
    return arr.filter(ele=> ele.toLowerCase().startsWith(str.toLowerCase()))
}
console.log(getNames(names , 's'));
