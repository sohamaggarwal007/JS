// // OBJECT CLONING

// // METHOD I- Using Spread Operator
// let src = {
//     age:12,
//     wt:68,
//     ht:180
// };

// let dest = {...src}; 

// src.age = 90;

// console.log("src:",src);
// console.log("dest:",dest);


// // METHOD II- Using Assign Operator
// let src = {
//     age:12 ,
//     wt:68 ,
//     ht:180
// };

// let src2 = {
//     value:102 ,
//     name:"Soham Agarwal"
// };

// let dest = Object.assign({}, src, src2);

// src.age = 26;

// console.log(src);
// console.log(dest);


// // METHOD III- Using Iteration Statements
// let src = {
//     age:12 ,
//     wt:68 ,
//     ht:180
// };

// let dest = {};

// for(let key in src) { 
//     // insert key and value in dest and create a clone
//     dest[key] = src[key];
// }
// src.age = 56;

// console.log(src);
// console.log(dest);