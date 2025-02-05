/*
    Strict Mode

    -Strict mode is a way to introduce better error-checking into your code.

    -We should be using strict mode in all of our files
*/

'use strict';

let a = 123;
let b = 55.456;

//bigint needs the letter n at the end of the number
let c = 9193710123710n;
let d = true;
let e = null;
let f = undefined;
let g = 'hello';

console.log(a + ' -> ' + typeof a);
console.log(b + ' -> ' + typeof b);
console.log(c + ' -> ' + typeof c);
console.log(d + ' -> ' + typeof d);
console.log(e + ' -> ' + typeof e);
console.log(f + ' -> ' + typeof f);
console.log(g + ' -> ' + typeof g);


