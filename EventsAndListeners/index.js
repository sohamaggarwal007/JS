
// function changetext(event) {
//     console.log(event);
//     let firstpara = document.getElementById('fpara');
//     firstpara.textContent = 'Aggarwal';   
// }    

// let firstpara = document.getElementById('fpara');
// firstpara.addEventListener('click', changetext);
// firstpara.removeEventListener('click', changetext);


// let anchorElement = document.getElementById('fanchor'); 

// function fun(event) {
//     event.preventDefault();
//     anchorElement.textContent = 'Click Done bhai';
// }

// anchorElement.addEventListener('click', fun);


// let paras = document.querySelectorAll('p');

function alertpara(event) {
    if(event.target.nodeName === 'SPAN'){
        alert("You have clicked on " + event.target.textContent);
    }
}

// for(let i=0; i<paras.length; i++) {
//     let para = paras[i];
//     para.addEventListener('click',alertpara);
// }


let mydiv = document.getElementById('wrapper');

document.addEventListener('click', alertpara);