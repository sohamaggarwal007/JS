// class Human {
//     //properties 
//     age;
//     #wt = 80; // PRIVATE
//     ht = 180;

//     constructor(newAge, newHeight, newWeight) {
//         this.age = newAge;
//         this.ht = newHeight;
//         this.#wt = newWeight;
//     }


//     //behaviour
//     walking() {
//         console.log("I am Walikng", this.#wt);
//     }

//     running() {
//         console.log("I am running.");
//     }

//     get fetchWeight() {
//         return this.#wt;
//     }

//     set modifyWeight(val) {
//         this.#wt = val;
//     }
// }

// // Creation of Object
// let obj = new Human(50, 190, 101);
// console.log(obj.ht);
// console.log(obj.fetchWeight);
// obj.walking();
// // console.log(obj.#wt); //ERROR because wt is a private variable.


// // DEFAULT PARAMETERS

// function sayName(fName = "Prabhu Deva", lName = fName.toUpperCase()) {
//     console.log("My Name is:", fName,"", lName);
// }

// sayName("Soham");


// function solve(val = "Rahul") {
//     console.log("Hello Ji!", val);
// }

// solve(undefined);


// function getage() {
//     return 25;
// }

// function utiltiy(name = "Soham", age = getage()) {
//     console.log(name, "", age);
// }

// utiltiy();