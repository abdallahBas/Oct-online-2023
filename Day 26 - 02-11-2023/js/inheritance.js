
/*
    1 - student   => id, SSN, name, address, phone, email, dob, department, level, gpa, courses | editEmail(), editAddress(), editPhone(), showGpa(), registerSubject()
    2 - employees => id, SSN, name, address, phone, email, dob, department, salary              | editEmail(), editAddress(), editPhone(), showSalary()
    3 - staff     => id, SSN, name, address, phone, email, dob, department, salary, courses     | editEmail(), editAddress(), editPhone(), showSalary(), assignCourse()
*/

// parent class | base class    | Super class | generalized class
// child class  | derived class | Sub class

class Person{
    constructor(id, SSN, name, address, phone, email, dob, department){
        this.id = id;
        this.name = name;
        this.SSN = SSN;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.dob= dob;
        this.department = department;
        console.log(`person created`);
    }
    editEmail(newEmail){
        this.email = newEmail;
    }
    editAddress(newAddress){
        this.address = newAddress;
    }
    editPhone(newPhone){
        this.phone = newPhone
    }
}

class Student extends Person{
    constructor(id, SSN, name, address, phone, email, dob, department, level, gpa, courses ){
        super(id, SSN, name, address, phone, email, dob, department)
        this.level= level;
        this.gpa= gpa;
        this.courses = courses;
        console.log(`student created`);
    }
    showGpa(){
        return this.gpa
    }
    rgisterCourse(newCourse){
        this.courses.push(newCourse);
    }
}

class Employee extends Person{
    constructor(id, SSN, name, address, phone, email, dob, department, salary ){
        super(id, SSN, name, address, phone, email, dob, department);
        this.salary = salary;
        console.log(`Employee created`);
    }
    showSalary(){
        return this.salary
    }
}

class Staff extends Employee{
    constructor(id, SSN, name, address, phone, email, dob, department, salary, courses){
        super(id, SSN, name, address, phone, email, dob, department, salary)
        this.courses = courses;
        console.log(`Staff Member created`);
    }
    editAddress(newAdd){
        return 'ok, good'
    }
    assignCourse(newCourse){
        this.courses.push(newCourse)
    }
}

let per = new Person(1,`2300258257578`,'ali ahmed' , 'Cairo','01022568989','ali@gmail.com', '2001-10-08', 'General')
per.editEmail('ali123@gmail.com')
console.log(per);

let stu = new Student(2,'205689598956','omar sayed','MNF','0126898248','omar@gmail.com','2002-20-02','CS',3,3.6,['database','web design', 'graphics'])
console.log(stu);
stu.editPhone('010252656898');
stu.rgisterCourse('data structure')
console.log(stu);

let emp = new Employee(3,'65989234595','sara aymen','Tanta','01032336659','sara@gmail.com','1994-09-10', 'Finance',10000)
console.log(emp);
emp.editAddress('Banha')
console.log(emp.showSalary());
console.log(emp);

let member = new Staff(4,'102689886', 'laila ahmed', 'Aswan','035895989','laila@gmail.com','1990-05-05', 'IT', 12000,['software' , 'programming'])

console.log(member);
console.log(member.showSalary());
member.editAddress('Cairo')
console.log(member);

Staff.prototype.stff = 'new staff from prototype'
let member2 = new Staff(5,'102689886', 'laila ahmed', 'Aswan','035895989','laila@gmail.com','1990-05-05', 'IT', 12000,['software' , 'programming'])
console.log(member.stff);
console.log(member2.stff);

Staff.prototype.prData= function(){
    console.log('this is staff prototype function');
}

member.prData()
member2.prData()


Person.prototype.globalAttr = 'I am global attribute in the parent class'
Person.prototype.globalfunc = function(){
    return `I'm global function from the parent class`;
}

console.log(member.globalAttr);
console.log(stu.globalAttr);
console.log(emp.globalAttr);

console.log(member.globalfunc());
console.log(stu.globalfunc());
console.log(emp.globalfunc());

// built-in 

String.prototype.custom = 'this is custom attribute'

let data = 'this is my message'

String.prototype.head= function(n){
    if (n < this.length){
        return this.slice(0,n)
    }
    return this;
}

Object.prototype.objAttr = 'all classes [user-defined  || built-in]'
Object.prototype.objFunction = function(){
    return    ` all classes function`
}

console.log(member.objAttr);
console.log(data.objAttr);
console.log(member.objFunction());
console.log(data.objFunction());