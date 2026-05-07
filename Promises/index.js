
let firstPromise = new Promise( (resolve, reject) => {
    
    setTimeout(function sayMyName() {
        console.log("MY name is Soham Aggarwal");
    }, 15000);
    resolve(1);
} );


let promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("10");
    }
    else {
        reject("Internal Server Error");
    }
});

promise1.then((message) => {
    console.log("First message is " + message);
    return "20";
}).then((message) => {
    console.log("Second message is " + message);
    return "30";
}).then((message) => {
    console.log("Third message is " + message);
    return "40";
}).catch((error) => {
    console.error(error);
}).finally((message) => {
    console.log("I will definately run no matter what!");
});


let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Second");
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "Third");
});

let promise4 = new Promise((resolve, reject) => {
    setTimeout(reject, 4000, "Fourth");
});

Promise.all([promise1, promise2, promise3, promise4])
.then((values) => {
    console.log(values);
})
.catch((error) => {
    console.error("error: " + error);
})