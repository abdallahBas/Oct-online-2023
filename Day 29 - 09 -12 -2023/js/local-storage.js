console.log(localStorage);

// add to local storage 
localStorage.id =  10;
localStorage["name"]= "local storage"
localStorage.setItem("item" , "value")

// get from local storage
console.log(localStorage.getItem('id'));
console.log(localStorage.name);
console.log(localStorage["item"]);

console.log(localStorage);
console.log(localStorage.key(0));



console.log(localStorage.length);

// to remove item
localStorage.removeItem("name")
console.log(localStorage.length);
console.log(localStorage);

// remove all data in local storage
localStorage.clear()
console.log(localStorage.length);
console.log(localStorage);




