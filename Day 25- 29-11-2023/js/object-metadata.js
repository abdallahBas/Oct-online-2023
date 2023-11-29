let obj = {
    id: 1,
    name: "tasneem",
    age: 5
}

function showObj(obj) {
    for (prop in obj) {
        console.log(`${prop} => ${obj[prop]}`);
    }
    console.log('------------------');
}

showObj(obj)
obj.id = 3;
obj.email= "email@example.com";
showObj(obj)
delete obj.id
showObj(obj)

/*  

writable 
false => can't edit
true  => can edit

configurable
true  => can delete
false => can't delete
enumerable 
true => appear in looping
false => don't appear in looping
*/

// 
Object.defineProperty(obj, "address" , {
    value:"Cairo",
    writable:true,
    configurable:true,
    enumerable:true
})

showObj(obj)

Object.defineProperties(obj, {
    prop1:{writable:true , configurable:false , enumerable:true , value:"property one"},
    prop2:{writable:false, configurable:false , enumerable:true, value:"property two"},
    prop3:{writable:true , configurable:true, enumerable:false, value:"property three"}
})
showObj(obj)

console.log(Object.getOwnPropertyDescriptor(obj , "email"));
console.log(Object.getOwnPropertyDescriptor(obj , "prop2"));
console.log(Object.getOwnPropertyDescriptors(obj));