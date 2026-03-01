// let obj = {
//     name: "Soham",
//     age: 18,
//     height: "5ft 9inch",
//     hobbies: "Coding",
//     greet: function() {
//         console.log("Hello How are U!");
//     }
// };

// for(let key in obj) {
//     console.log(key, "", obj[key]);
// }


// console.log(obj);
// obj.greet();
// console.log(typeof(obj));

// let obj2 = obj;
// console.log(obj2);
// obj2.greet();


// CREATION OF ARRAYS

// let arr = [1,2,3,4,5,];
// console.log(arr);

// // array constructor
// let brr = new Array(1,"Soham",true);

// console.log(brr[0]);
// console.log(brr[1]);
// console.log(brr[2]);
// console.log(brr);
// console.log(typeof(arr));
// console.log(typeof(brr));

// let crr = new Array("Soham",18,true);
// crr.push("Aggarwal"); // insert at the end of the array
// crr.pop(); // removes the last element of the array
// crr.shift(); // remove the first element of the array
// crr.unshift("Soham"); // insert at the beginning of the array
// crr.push(10);
// crr.push(20);
// crr.push(70);
// console.log(crr.slice(2,4)); // part of the array from index 2 to 3 (4 is not included)
// crr.splice(1,2,"Yash"); // index number-> delete count-> insertion
// console.log(crr);

// MAP
// let arr = [10,20,30];

// arr.map((num,index) => {
//     console.log(num);
//     console.log(index);
// })

// let ansArray = arr.map((num) => {
//     return num*num;
// });
// console.log(ansArray);

// FILTER
// let arr = [10,20,30,11,21,44,51];

// let evenArray = arr.filter((number) => {
//     return number%2 === 0;
//     // if(number%2 == 0) {
//     //     return true;
//     // }
//     // else {
//     //     return false;
//     // }
// });
// console.log(evenArray);


// let arr = [1,2,'soham','yash',null];

// let ans = arr.filter((value) => {
//     if(typeof(value) === 'number') {
//         return true;
//     }
//     else {
//         return false;
//     }    
// });

// console.log(ans);


// let arr = [10,20,30,40];
// let ans = arr.reduce((acc,curr) => {
//     return acc + curr;
// }, 0);
// console.log(ans);


// let arr = [2,9,10,5,1,0];
// arr.sort();
// console.log(arr);


// let arr = [10,20,30];
// let length = arr.length;
// console.log("length: ", length);

// Traditional Loop
// for(let index = 0; index < length; index++) {
//     console.log(arr[index]);
// }

// arr.forEach((value, index) => {
//     console.log("Number: ",value,"Index: ",index);
// })


// let arr = [10,20,30,40];

// for(let value of arr) {
//     console.log(value);
// }


// let fullName = "Soham";

// for(let value of fullName) {
//     console.log(value);
// }


let arr = [10,20,30,40,50];

function getSum(arr) {
    let sum = 0;
    arr.forEach((value) => {
        sum = sum + value;
    });
    return sum;
}

let TotalSum = getSum(arr);
console.log(TotalSum);