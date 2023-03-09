"use strict";
// Equality and Inequality with strings :
let book1 = '123';
console.log(`Is book1 == '123'? I Predict true.`);
console.log(book1 == '123');
// Tests using the lower case function :
let city = 'Lahore';
let country = 'Pakistan';
console.log(`Is ${city.toLowerCase()} in ${country.toLowerCase()}? I predict true.`);
console.log(city.toLowerCase() == country.toLowerCase());
// Numerical tests
let num1 = 2;
let num2 = 4;
console.log(`Is ${num1}+${num2} == 6? I predict true?`);
console.log(num1 + num2 == 6);
let num3 = 2;
let num4 = 4;
console.log(`Is ${num3} > ${num4} ? I predict true?`);
console.log(num3 > num4);
let num5 = 2;
let num6 = 4;
console.log(`Is ${num5} <= ${num6} ? I predict true?`);
console.log(num5 <= num6);
// Logical Operators
let x = 2;
let y = 4;
console.log(`x is greater than 3 and y is greater than 5 ? I predict true.`);
console.log(x > 3 && y > 4);
let e = 2;
let f = 4;
console.log(`e is greater than 3 or f is greater than 5 ? I predict true.`);
console.log(e > 3 || f > 4);
