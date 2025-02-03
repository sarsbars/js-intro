/*
    Constants are variables that cannot be resassigned a new value. We use 
    constants to store values that we don't want to change (like username)
*/


//Numbers can be broken up by underscores to help us read them
const SECONDS_IN_A_DAY = 86400;
const MILLION = 1_000_000;
const BILLION = 1_000_000_000;
const TEN_THOUSAND = 10_000;

const GST = 0.06;

//The following code would give us an error, since you can't change a constant
//GST = 0.01;

const numbers = [1, 2, 3, 4, 5];

numbers[0] = 999;
console.log(numbers);
