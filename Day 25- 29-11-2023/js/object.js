/*

oop => object oriented programming
oop = programming paradigm based on concept of object
main goal of oop => minimize and orgnize code
inheritance, encapsulation, interface , abstract

object => any thing we stored data about it

university  => students, staff, courses, departments, Halls, employees, ...
supermarket => products, clients, providers, cash, 


// object consists of two parts 
    1- characterstics | variables | attributes | data members | properties
    2- functions  | methods | operations | behaviors


    BankAccount
        1- name , phone , email , address, balance, ssn
        2- withdraw, deposite, checkBalnce, changePassword, TransferMoney, addAccount
    
    Facebook
        1- name , email , password, tel , dob , gender, ...
        2- addpost, editpost , deletePost , sharePost, changeEmail, changePhone, AddPhone, ...
*/

// object as datatype

const user1 = {
    id: 1,
    name: "ali ahmed",
    balance: 60000,
    "1": 10,
    "account status": true,
    address: { country: "egypt", gov: "Cairo", city: "M.Nasr", street: "Khalafway" },
    skilld: ["html", "css", "js"],

    checkBalance: function () {
        return this.balance;
    },
    deposite: function (quantity) {
        if (quantity > 10000 || quantity % 50 != 0 || quantity < 0) {
            console.log('error');
        } else {
            this.balance += quantity;
        }
    },

    withdraw: function (qnt) {
        if (qnt < 0 || qnt > user1.balance || qnt % 20 != 0) {
            console.log('error');
        } else {
            this.balance -= qnt;
        }

    },
    getObj: function(){
        return this
    }
}

// dot notations
console.log(user1.id);
console.log(user1.name);
console.log(user1.balance);
console.log(user1.checkBalance());
user1.deposite(10125)
user1.deposite(80000)
user1.deposite(8000)
console.log(user1.checkBalance());
user1.withdraw(1010)
user1.withdraw(900000)
user1.withdraw(9000)
console.log(user1.checkBalance());

// bracket notation
let x = "name";
console.log(user1["1"]);
console.log(user1["account status"]);
console.log(user1["name"]);
console.log(user1.address);
console.log(user1.address.city);
console.log(user1["address"].city);
console.log(user1["address"]["city"]);
console.log(user1[x]);

// update fields
user1.id = 2;
user1["account status"] = false;

console.log(user1);

// add new property
user1.phone = "+2015656898234"
user1["email"] = "ali@gmail.com"
console.log(user1);

// add function
user1.sayHello = function () {
    console.log(`Hello ${user1.name}`);
}


// create object
// 1- basic
let obj1 = {}

// 2- new  keyword
let obj2 = new Object({})

// 3- create method
let obj3 = Object.create(user1)
let obj4 = Object.create(user1)

obj3.balance = 100000;
obj4.id = 4;
obj4.balance = 60000;
btn.onclick = function(){
    console.log(this);
}
res.onclick = function(){
    console.log(this);
}
// 4- Assign method
let ob1 ={id:1 , name:"sara"}
let ob2 ={id:2 , name:"ahmed"}
let ob3 ={id:3, address : "MNF"}
let ob4 ={level: 5 , gpa: 3.9}

let ob5={}
Object.assign(ob5,ob2,ob3, ob1, ob4)
console.log(ob5);


// 5- freeze method  (property can't be deleted)
let ob6 = Object.freeze({id:1, name:"laila"})

// delete operator => delete property not object
console.log(ob5)
delete ob5.id
console.log(ob5)
console.log(ob6)
delete ob6.id
console.log(ob6)

// Loop 
for(let prop in ob5){
    console.log(`${prop} => ${ob5[prop]}`);
}

// object metadata and descriptor
let obj7 = {id:1 , name:"ali"}