let a =  10 , b;
let c = a + b;
document.write(`c = ${c}`)

let arr1 = [10,20,40 , 50, 60]
let arr2 = [10,20,40 , 50]
let arr3 =[];

let maxLength = arr1.length > arr2.length ? arr1.length : arr2.length;
for(let i =0 ;i < maxLength ; i++){
    arr3.push((arr1[i] || 0 ) + (arr2[i] || 0))
    // arr3.push(arr1[i]  + arr2[i])
}

// nullish ??

// nested loops 
// outer loop
document.write('<br>')
for(let i=0 ; i<3; i++){
    document.write(`i => ${i}\t | J => `)
    // inner loop
    for(let j = 0; j<10 ; j++){
        document.write(`${j}\t`)
        if(j  == 4){
            break;
        }
    }
    document.write('end of iteration <hr>')
}

let students = [ 
    [90,80,70],
    [89,78,94],
    [58,96,47],
    [58,69,97],
    [57,48,69]
 ]


for(let student of students){
    let sum = 0;
    for(let mark of student){
        sum += mark;
        document.write(`${mark} `)
    }
    console.log(`${student.join(" | ")} => ${sum}`);
    document.write('<br>')
 }

 console.log('------------------------');
 for(let i = 0 ; i<students.length ; i++){
    let sum = 0;
    for(let j =0 ; j<students[i].length; j++){
        sum += students[i][j];
    }
    console.log(`${students[i].join(" | ")} => ${sum}`);


 }
document.write('<hr>')
 for(let student of students){
    for(let mark of student){
        document.write(`${mark} `)
    }
    document.write('<br>')
 }


 let all = [1,2,3,2,4,5,6,2,7,8,2,8,7,9 , 6]
 let mostFreq = all[0] || 0;
 let freq = 0;
 let maxFreq = 0;
 for (let i = 0 ; i< all.length ; i++){ // 1
    for (let j = i ; j < all.length ; j++){
        
        /*
        
        most frequent = 1 => 2  
        maxfreq = 0 => 1 => 2 => 3 => 4
        freq = 0=> 1 => 0 => 1=> 2= > 3 => 4=> 0=>1
        outer item = 1 => 2
        
        */
    //    3 == 3
        if (all[i] == all[j]){
            freq += 1;
        } 
        // 
        if(maxFreq < freq)   {
            maxFreq = freq;
            mostFreq = all[i]
        }
    }

    console.log(mostFreq , maxFreq);

    freq = 0
 }
 
 console.log(`Most freq => ${mostFreq} with frequency = ${maxFreq}`);