// async function getData() {
    
//     setTimeout(function() {
//         console.log("I am inside set Timeout block.")
//     }, 3000);

// }

// let output = getData(); // Async function always return promise


// fetch API

// async function getData() {

//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    
//     // parse json
//     let data = await response.json();
//     console.log(data);
// }

// getData();

// const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//     method: "POST",
//     body: JSON.stringify({ username: "Soham Aggarwal" }),
//     headers: myHeaders,
// };

// async function getData() {
//     const response = await fetch(url);
//     let data = await response.json();
//     console.log("My Data Response: ", data);
// }

// async function postData() {
//     const response = await fetch(url,options);
//     let data = await response.json();
//     console.log("My Post Response: ", data);
// }

// async function processData() {
//     await postData();
//     await getData();    
// }

// processData();