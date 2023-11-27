

// local scope vs global scope

// global vriable
let z = 1000;
let k  = 10 ;
function f1(data) {
    let x1 = 10;
    let k  = 5 ;
    k += 80 ;
    
}

function f2() {
    let x2 = 20;
    // x2 += x1;  // error
    let z = 100;
    function f2_1() {
        let z = 10;
        console.log(`F2-1 => ${x2}`);
        let x2_1 = 25;
        console.log(z);
    }
    function f2_2(){

    }

    // console.log(x2_1);

    f2_1()

}

function f3() {
    let x3 = 30;
    // console.log(data); // error
    k += 70 ;

}


console.log(`k = ${k}`);
f1()
console.log(`k = ${k}`);
f3()
console.log(`k = ${k}`);

f2()
console.log(`k = ${k}`);
// f3()


// block scope [switch , if , loops]

function test(){
    let x = 10 ;  //  var
    var y = 10;  // var
    var k = 10;

    if( true){
        let x = 20;  // another var
        var y = 20;  // same y [not new variable]
        let k  = 20;
        x +=30;
        y +=30;
        k +=30;
        console.log(`x = ${x}`);
        console.log(`y = ${y}`);
        console.log(`k = ${k}`);
    }
    
    
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);
    console.log(`k = ${k}`);
}
