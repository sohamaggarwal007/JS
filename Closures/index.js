

// let name = "Manish";
// function outerfunction() {
//     let name = "Aggarwal"; // let-> Block Scoped
//     function innerfunction() {
//         let name = "Soham"; 
//         console.log(name);
//     }
//     innerfunction();
// }
// outerfunction();

function outerfunction() {
    let name = "Aggarwal"; 
    function innerfunction() { 
        console.log(name);
    }
    return innerfunction;
}
let inner = outerfunction();

inner();
