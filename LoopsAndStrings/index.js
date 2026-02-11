/* FOR LOOP

for (let i=1; i<=5; i++) {
    console.log("aggarwal");
}

for (let i=1; i<=5; i++) {
    console.log(i);
}

for (let i=5; i>0; i--) {
    console.log(i);
}

for (let i=1; i<=6; i++) {
    if(i==4)
        break;
    else 
        console.log(i);
}

for (let i=1; i<=4; i++) {
    if(i==3)
        continue; // skip current iteration and move on to next iteration
    else 
        console.log(i);
}
*/

/* WHILE LOOP

let i=1;
while(i<=10) {
    console.log("aggarwal");
    i++;
}

let i=1;
while(i<6) {
    console.log(i);
    i++;
}

let i=5;
while(i>0) {
    console.log(i);
    i--;
}

let i=1;
while(i<=5) {
    if(i==3)
        break;
    else {
        console.log(i);
        i++;
    }
}

let i=1;
while(i<5) {
    console.log("Inside the loop");
    if(i==3) {
        i++;
        continue;
    }
    else 
        console.log(i);
    i++;
}
*/

/* DO WHILE LOOP

let i=1;
do {
    console.log(i);
    i++;
}while(i<=10)

let i=1;
do {
    console.log(i);
    i++;
}while(i<6)

let i=5;
do {
    console.log(i);
    i--;
}while(i>0)
*/

// STRINGS

// let name=`Soham
// Aggarwal is
// my
// name`; 
// console.log(name);

// let firstName= new String("Soham Aggarwal");
// console.log(firstName);

// let op1="english";
// let op2="HINDI";

// console.log(op1.length); // Lenght of a String
// console.log(op2.length);

// let finalans= `${op1} ${op2}`;
// console.log(finalans);

// let ans= op1 + op2; // Concatenation
// console.log(ans);

// console.log(op1.toUpperCase()); //Uppercase
// console.log(op2.toLowerCase()); // Lowercase

// let str = "Soham";
// console.log(str.substring(2));
// console.log(str.substring(1,4));// Ending index is exclusive

// let sentence = "HelloJee \"How are u doing today\"";
// console.log(sentence);
// let words = sentence.split(` `);
// console.log(words);
// console.log(words.join(`,`));