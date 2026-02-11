/* arithmetic operator

let a=10;
let b=5;

console.log(a+b);
console.log(a-b);
console.log(a/b);
console.log(a*b);
console.log(a**b);
console.log(a%b);
*/

/* unary operator

let c=5;

console.log(++c);
console.log(c++);
console.log(c);

console.log(--c);
console.log(c--);
console.log(c);
*/

/* assignment operator

let d=9;
d=d+10; // = is called assignment operator
console.log(d);
d+=10;
console.log(d);
*/

/* comparison operator

let e=6;
let f=2;
let g="6";

console.log(e==g); // Loose equality operator
console.log(e===g); // Strict equality operator

console.log(e!=g);
console.log(e!==g);

console.log(e>f);
console.log(e<f);
console.log(e>=f);
console.log(e<=f);
*/

/* ternary operator

let age = 18;
let stat = ((age>=18) ? "You can vote" : "You cannot vote");
console.log(stat);  
*/

/* logical operator (For Booleans)

console.log(true && true); // AND operator
console.log(true || false); // OR operator
console.log(!(false)); // NOT operator
*/

/* logical operator (For Non-Booleans)

console.log(false && "Hello");
console.log(true && 4);
console.log(false || NaN); // NaN is falsy value
console.log(true || "World");
console.log(false || 7 || 18 || 15); // returns first truthy value
console.log(true && NaN && 18 && 15); // returns first falsy value
*/

/* bitwise operator

console.log(2 | 5); // AND
console.log(1 & 0); // OR
console.log(1 ^ 5); // XOR
console.log(~10); // NOT
console.log(5 << 2); // Left Shift (Multiply by 2^n)
console.log(12 >> 2); // Right Shift (Divide by 2^n)
*/

// Conditionals

/* if-else statement

let number=4;
let age=20;
if(number==1) {
    console.log('A');
}
else if(number==2) {
    console.log('B');
}
else if(number==3) {
    console.log('C');
}
else if(number==4) { // Nested if-else 
    if(age>18) {
        console.log('You can Vote');
    }
    console.log('D');
}
else {
    console.log('F');
}
*/

/* switch statement

let num=3;
switch(num) {
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    case 4: console.log('D');
    break;
    default: console.log('F');
}
*/