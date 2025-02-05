'use strict';

// Logical operators: must be either true or false
// && (AND) , || (OR), ! (NOT)

let valid = true;
let ok = false;

// && - It's only true if BOTH are true
console.log(valid && valid);
console.log(valid && ok);

// || - It's true if at least ONE condition is true

console.log(valid || ok);

// ! - switches true to false and false to true

console.log(!ok);
console.log(valid && !ok);

// Comparison Operators: =, <, >, >=, <=

let a = 10;
let b = 5;
let c = b;

// A comparison always returns a boolean value

console.log(a > b);      //true
console.log(b >= c);     //true
console.log(a < b);      //false
console.log(b < a);      //true
console.log(b <=c);      //true

console.log('234' < '3');   //surprisingly true, because it treats '234' as '2'


//Equality operators: ==, ===, !=, !==
// == loose equality (checks value), NOT BEST PRACTICE
// === strict equality (checks value and type)

console.log(10 == '10'); // BAD practice
console.log (10 === '10'); // best practice

// The first option would say true, they are close enough, the second option 
// (with ===) would say false because its a different type