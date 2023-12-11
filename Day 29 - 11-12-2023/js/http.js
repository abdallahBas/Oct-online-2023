/*

readyState
    0 => 


*/

// const contaier = document.getElementsByClassName('users')[0];
const contaier = document.querySelector('.users')
const tableData = document.getElementById("tab")
let req = new XMLHttpRequest();
let data;
req.addEventListener('readystatechange', function () {
    // console.log(req.readyState);
    if (req.readyState == 4 && req.status == 200) {
        console.log(this.responseText);
        data = JSON.parse(this.responseText);
        console.log(data);
        console.log(data.users);
        console.log(data.users[0]);
        console.log(data.users[0].likes);
        console.log(data.users[0].address);
        for (user of data.users) {
            console.log(user.likes);
            const userDiv = document.createElement('div');
            const nameEle = document.createElement('h3');
            const emailEle = document.createElement('p')
            const likesEle = document.createElement('p');
            const addressEle = document.createElement('p')
            const ageEle = document.createElement('p');
            nameEle.textContent = `Full Name : ${user.firstname} ${user.lastname}`
            emailEle.textContent = `Email : ${user.email}`;
            likesEle.textContent = `Likes : ${user.likes.join(" | ")}`;
            addressEle.textContent = `Country: ${user.address.country} | City:  ${user.address.city}`
            ageEle.textContent = `Age :  ${user.age}`
            userDiv.append(nameEle, emailEle, likesEle, addressEle, ageEle);
            contaier.appendChild(userDiv)
            userDiv.classList.add('user')
        }

        for (user of data.users) {
            // for each row
            const row = document.createElement('tr');
            for (let item in user) {
                // for each td inside row except actions
                const tdEle = document.createElement('td')
                if (typeof user[item] == "object" && !Array.isArray(user[item])) {
                    tdEle.textContent = `${user[item].country} - ${user[item].city}`
                } else if (Array.isArray(user[item])){
                    tdEle.textContent = user[item].join(" | ")
                }
                else {
                    tdEle.textContent = user[item]
                }
                row.append(tdEle)
            }
            const tdEle = document.createElement('td');
            tdEle.innerHTML = `<button>Edit</button> <button class='del'>Delete</button>`
            row.append(tdEle)

            tableData.append(row)
        }




    }
})


req.open("GET", "data/data.json")
req.send()
console.log(req);

// const allDelets = document.getElementsByClassName('del');

document.addEventListener('click' , function(event){
    if (event.target.className == 'del'){
        console.log(event.target.parentElement.parentElement.firstElementChild.textContent);
        console.log(event.target.parentElement.parentElement.children[0].textContent);
        event.target.parentElement.parentElement.remove();
    }
})