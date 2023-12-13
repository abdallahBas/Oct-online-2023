function getData(){
    return new Promise ((res , rej) => {
        res('resloved data')
    })
}
console.log(getData());

getData().then( (resolve) => console.log(`resolved value = > ${resolve}`))

function showData (){
    let x = 10 ;
    if (x >  54){
        return Promise.resolve('connectio established');
    }
    else {
        return Promise.reject('No data found')
    }
}

showData().then(
    (res) => {console.log(`Resolved Data ${res}`);},
    (rej)=> {console.log(`Reson :  ${rej}`);}
)

console.log('--------------------------');

async function fetchData(age , votingAge ){
    if (age > votingAge){
        return "you allowed";
    }else{
        throw "error"
    }
}
fetchData(10,5).then(
    (res) =>{console.log(res);},
    (rej) => {console.log(`Reason  => ${rej}`);}

)