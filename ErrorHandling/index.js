// COMPILE-TIME ERROR
// console.log(1; // syntax error


// RUN-TIME ERROR
// console.log(x); // x is not defined so it will show reference error

// Try-Catch Block
// try{ // The code which is most likely to have an error is written in try block
//     console.log("Try Block starts here");
//     console.log(x);
//     console.log("Try Block ends here");
// }

// // If there is no error catch does not executes

// catch(e) { // The catch block catches the error and the error is given a variable 'e'
//     // Here, we define what to do with the error
//     console.log("I am inside catch block");
//     console.log("Your error is here:", e);
// }


// FINALLY BLOCK
// This will run everytime

// try{
//     console.log("Try Block starts here");
//     // error -> Reference Error
//     console.log(x);
//     console.log("Try Block ends here");
// }

// catch(e) {
//     console.log("I am inside catch block");
//     console.log("Your error is here:", e);
// }

// finally{
//     console.log("I will run everytime because I am a finally block");
// }


// Creating a Custom Error

// try{
//     // Reference Error
//     console.log(x);
// }

// catch(e) {
//     throw new Error("First declare the variable then print the variable.");
// }


// let errorCode = 100;
// if (errorCode == 100) {
//     throw new Error("Invalid Json");
// }