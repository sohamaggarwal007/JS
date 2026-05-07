
// Code 1

const t1 = performance.now();

for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    document.body.appendChild(para); 
}

const t2 = performance.now();

console.log("Total time by code 1: " + (t2-t1));

// Code 2

const t3 = performance.now();

let mydiv = document.createElement('div');

for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    document.body.appendChild(para); 
}
document.body.appendChild(mydiv);

const t4 = performance.now();

console.log("Total time by code 2: " + (t4-t3));


// DOCUMENT FRAGMENT (BEST PRACTICE)

let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is Para " + i;
    // NO reflow and repaint for the below line
    fragment.appendChild(para);
}

document.body.appendChild(fragment); // Only 1 reflow and 1 repaint is used 