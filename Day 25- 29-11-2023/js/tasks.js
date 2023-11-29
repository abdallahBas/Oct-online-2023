function getMultiplies(start, end, number) {
    let multiplies = []
    for (let i = start; i <= end; i++) {
        if (i % number == 0) {
            multiplies.push(i)
        }
    }
    return multiplies;
}

console.log(getMultiplies(10, 50, 4))
console.log(getMultiplies(15, 80, 3))

let salaries = [10000, 2000, 6000, 5000, 7000, 800]

function getLimit(salaries, limit, percent) {

    let filteredSal = [];
    if (percent > 1) {
        percent /= 100;
    }
    console.log(salaries);
    
    for (sal in salaries) {
        salaries[sal]  *= (1 + percent)
        if (salaries[sal] > limit){
            filteredSal.push(salaries[sal])
        }
        // salaries[sal] += 100;
    }
    console.log(salaries);
    return filteredSal;
}

