//  arithmetic [unary operators] , assignment, comparison , logical 

// arithmetic operators [+ - / * % ++ -- ** ]

let number1 = 20, number2 = 50
let result = number1 + number2
console.log(`number1 = ${number1}, number2 = ${number2}`);
console.log(`sum = ${result}`);
result = number2 - number1
console.log(`subtract = ${result}`);
console.log(`division = ${number2 / number1}`);
console.log(`multiplication = ${number2 * number1}`);
console.log(`Reminder = ${number2 % number1}`);
console.log(`Exp (2^3) = ${2 ** 3}`);

/* precedence  
1- () 
2- * / % 
3- + - 
*/
console.log(`result = ${6+3*2-4/2}`);
console.log(`result = ${(6+3)*2-4/2}`);
console.log(`result = ${(6+3)* (2-4) /2}`);
console.log(`result = ${  2 * (2 * (4 /  2 + (5 -3 ) ))  }`);

// ++ -- [prefix , postfix]  
// x++ , x--  => postfix   =>  = then ++
// --x , ++x  => prefix    => ++ then =

let x = 10
let y = x++;
console.log(`x = ${x} , y = ${y}`);
y = ++x;
console.log(`x = ${x} , y = ${y}`);

y = --x;
console.log(`x = ${x} , y = ${y}`);
y = x--;
console.log(`x = ${x} , y = ${y}`);
x++
console.log(`x = ${x} , y = ${y}`);
++x
console.log(`x = ${x} , y = ${y}`);


// assignment [ = += -= /= %= **=]
console.log('Assignment operators');
let num1 = 20
console.log(`num1 = ${num1}`);

num1 += 10  // num1 = num1 + 10
console.log(`num1 = ${num1}`);  // 30

num1 -= 15
console.log(`num1 = ${num1}`);  // 15

num1 /= 3
console.log(`num1 = ${num1}`);  // 5

num1 *= 4
console.log(`num1 = ${num1}`);  // 20

num1 %= 6
console.log(`num1 = ${num1}`);  // 2

num1 **= 3
console.log(`num1 = ${num1}`);  // 8

let rate = 60;
num1 += rate
console.log(`num1 = ${num1}`); 

let username = "ali"
username += " ahmed"
console.log(username);

// comparison operators => result  = true | false
// > >= < <= == != === !==

let t1 = 20 , t2 = 30 , t3 = "30"

console.log(`${t1} > ${t2} => ${t1 > t2}`);
console.log(`${t1} >= ${t2} => ${t1 >= t2}`);
console.log(`${t1} < ${t2} => ${t1 < t2}`);
console.log(`${t1} <= ${t2} => ${t1 <= t2}`);
console.log(`${t1} == ${t2} => ${t1 == t2}`);
console.log(`${t1} != ${t2} => ${t1 != t2}`);
console.log(`${t2} == ${t3} => ${t2 == t3}`);   // compare only values
console.log(`${t2} === ${t3} => ${t2 === t3}`); // compare values and data type  (identical)
console.log(`${t2} !== ${t3} => ${t2 !== t3}`); // compare values and data type  (identical)

let compResult = t1 == t2
console.log(compResult);

/*logical operators 
1-  && => and
2-  || => or
3-  !  => not
*/

let balance = 50000
let quantity =5000
let res = quantity > 0 && quantity %10 == 0 && quantity < balance && quantity <= 10000
console.log(res);

// cond1 || cond2 && cond3   => && then ||


// unary operator [+ ,  -]
// return number from variable if possible

console.log('unary operator');
console.log(+true);
console.log(+false);
console.log(+"50");
console.log(+null);
console.log(+"");
console.log(+"10AB");
console.log(+undefined);
console.log(-true);
console.log(-false);
console.log(-"50");
console.log(-null);
console.log(-"");
console.log(+-"10AB");
console.log(-undefined);

// type coercion  => automatic casting from data type to another
console.log('type coercion');
console.log("ali" + 10);
console.log("10" + 50 );
console.log("10" + 50 + 20 +true );

console.log("10" - 5 );
console.log("10" - "8" );
console.log(11 + true);
console.log(true - false);
console.log(true * 3 - false);
console.log(10 + true - false);


