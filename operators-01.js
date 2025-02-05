'use strict';

let a = 10;
let b = 5;
let c = 0;
let d = '10';
let e = 'Freddy';
let f = 'John';

// Arithmatic Operators

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a / c);
console.log();


// Remainder / modulus operator 
console.log(16 % 3);

let num = 8;

if (num % 2 === 0) {
    console.log('Even');
}

// Incredment and decrement operator
a++;
a++;
a++;
console.log(a);

a--;
a--;
a--;
a--;
console.log(a);

// The exponentiation operator
console.log(3 ** 2); //(This is 3 to the power of 2)
//People perfer the lower method rather then the higher
console.log(Math.pow(3, 2));
