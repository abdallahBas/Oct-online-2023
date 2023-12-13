apilink = "https://dummyjson.com/products"

// fetch returns promise   [Response Object]
fetch(apilink).then (
    (result) => {
        return result.json();
    }   
).then(
    (data)=> {
       return data.products;
    }
).then (
    (products)=> {
        for (let prod of products){
            console.log(prod.title);
        }
    }
)