// let obj = {
//     name: "Soham",
//     age: 18,
//     height: "5ft 9inch",
//     hobbies: "Coding",
//     greet: function() {
//         console.log("Hello How are U");
//     }
// };

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
let arr = [10,20,30,11,21,44,51];

let evenArray = arr.filter((number) => {
    if(number%2 ==0) {
        return true;
    }
    else {
        return false;
    }
});
console.log(evenArray);