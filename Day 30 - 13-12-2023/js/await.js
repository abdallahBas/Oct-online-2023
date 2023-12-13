let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`i'm resolver`)
    }, 2000);
})

async function fetchData(){
    
    console.log('funaction Start');
    await mypromise.then( (resolve)=> console.log(resolve) )
    console.log('funaction End');
}

fetchData()

// try , catch , finally
apilink = "https://dummyjson.com/products"
async function getData(){
    console.log('before fetch');
    try{
        // async
        let mydata = await fetch(apilink)
        console.log(  await mydata.json());
    }catch(reason){
        console.log(`Reason  : ${reason}`);
    }finally{
        console.log('after fetch');
    }
}

getData()