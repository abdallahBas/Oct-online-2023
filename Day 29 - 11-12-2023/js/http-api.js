


// const req = new XMLHttpRequest()
// // req.open("GET", "https://dummyjson.com/products");
// req.open("GET", "https://dummyjson.com/users");
// req.send();


// req.addEventListener('readystatechange' , function(){
//     if (req.readyState == 4 && req.status ==200){
//         const data = JSON.parse(req.responseText)
//         console.log(data);
//         console.log(data.users);
//         for(let user of data.users){
//             console.log(user.firstName);
//         }



//     }
// })


const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		// console.log(this.responseText);
        console.log(JSON.parse(this.responseText));
        let data = JSON.parse(this.responseText).results;
        console.log(data);
        for (let movie of data){
          
                console.log(movie.releaseYear.year);
        
        }
	}
});
year = 2031;
xhr.open('GET', `https://moviesdatabase.p.rapidapi.com/titles?startYear=${year}`);
xhr.setRequestHeader('X-RapidAPI-Key', '852b8051bcmsh826b75f84df1a20p1cf725jsna72df94f6af7');
xhr.setRequestHeader('X-RapidAPI-Host', 'moviesdatabase.p.rapidapi.com');

xhr.send(data);