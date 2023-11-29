let user1 = {
    id: 1,
    name: "ali ahmed",
    displayData: function () {
        console.log(`
        ID : ${this.id}
        Name : ${this.name}
        `);
    }
}

let user2 = {
    id: 2,
    name: "Sara Ahmed",
    email: "sara@gmail.com",
    displayData: function () {
        console.log(`
        ID : ${this.id}
        Name : ${this.name}
        `);
    }
}

// constructor function
function Student(i, n, ad) {
    this.id = i;
    this.name = n;
    this.address = ad;

    this.showData = function () {
        console.log(`
        id = > ${this.id}
        name = > ${this.name}
        address = > ${this.address}
        `);
    }
}

let student1 = new Student(1, 'laila', 'cairo');
let student2 = new Student(2, 'omar', 'Aswan');


// ES6 + class
class Staff {
    // private attribute
    #phone;

    // static 
    static counter = 0 ;

    // special function
    constructor(id = 'UID', name = 'unKnown', salary = 5000, address = 'Egypt', phone = "+2010000000") {
        // intialize to parameters
        this.name = name;
        this.id = id;
        this.address = address;
        this.salary = salary;
        this.#phone = phone;
        console.log('staff member created');

        Staff.counter++;
        this.count = Staff.counter;
    }

    editAddress(newAdd) {
        this.address = newAdd;
    }

    getPhone() {
        return this.#phone;
    }
    setPhone(phone) {
        this.#phone = phone
    }

    static getCounter() {
        return `There are ${Staff.counter} staff members created`
    }
}

// class / instance 
let member1 = new Staff(10, 'aseel', 50000, 'cairo', '010223335566')
let member2 = new Staff(20, 'ahmed', 30000, 'Aswan', '015555555')
let member3 = new Staff();

// encapsulation
// private
console.log(member1.id);
member1.id = 10;
console.log(member1);
// console.log(member2.#phone);
console.log(member2.getPhone());
console.log(member2);
member2.setPhone('01224589659')
console.log(member2);

// Static => 