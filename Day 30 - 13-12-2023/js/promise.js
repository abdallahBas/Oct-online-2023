

/*
pending => inital
fullfilled => accepted
reiected

*/
let votimgAge = 18;
let prom = new Promise(function (resFunc, rejFun) {
    let myAge = 25;
    if (myAge > votimgAge) {
        resFunc("Ok, Connection established")
    } else {
        rejFun(Error("Connection Failed"))
    }
}).then(
    (resolveValue) => { console.log(resolveValue); },
    (rejectValue) => { console.log(rejectValue); console.log('connection rejected'); })

console.log(prom);

// https://dummyjson.com/products


function fetchData(apilink) {
    return new Promise((resolveFunction, rejectFunction) => {
        const req = new XMLHttpRequest();

        req.addEventListener('load', function () {
            if (req.readyState == 4 && req.status == 200) {
                resolveFunction(JSON.parse(req.responseText))
            } else {
                rejectFunction('connection refused')
            }
        })
        req.open("GET", apilink);
        req.send();
    }).then(
        (resolveValue) => { console.log(resolveValue); },
        (rejectValue) => { console.log(rejectValue); console.log('connection rejected'); })

}
apilink = "https://dummyjson.com/products"
// fetchData(apilink)

// promise asynchronous
let pr = new Promise((resolveFunction, rejectFunction) => {
    const req = new XMLHttpRequest();

    req.addEventListener('load', function () {
        if (req.readyState == 4 && req.status == 200) {
            resolveFunction(JSON.parse(req.responseText))
        } else {
            rejectFunction('connection refused')
        }
    })
    req.open("GET", apilink);
    req.send();
}).then(
    (resolveValue) => {
        return resolveValue.products
    },

    (rejectValue) => {
        return `${rejectValue} - link error`;
    }
).then(
    (products) => {
        console.log(products);
    }
)


console.log('end program');

// callback hell

setTimeout(()=> {
    console.log('recored video');
    setTimeout(() => {
        console.log('Prepare video');
        setTimeout(() => {
            console.log('Add logo to video');
            setTimeout(()=> {
                console.log('Upload Video');
            } , 1000)
        }, 1000);
    }, 1000);
}, 1000)


let videoPromise = new Promise((resFunc , rejFunc)=> {
    let decision = true;
    if (decision){
        resFunc('recod Video');
    }else {
        rejFunc(`can't record`)
    }
}).then( 
    (resolve) => {console.log('prepare videon');}
).then ( 
    (res1) => {console.log('Add logo to video'); return 10 ;}

).then((res2)=> console.log('upload video'))