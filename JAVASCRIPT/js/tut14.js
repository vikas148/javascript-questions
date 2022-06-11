console.log('tut14');
/*
element selectors
1 single element selector

2.multielement selector

*/
//single element selectors
let element=document.getElementById('first');
// element=element.className;
// element=element.childNodes;
element=element.parentNode;
element.style.color="red";

// element.innerText='killer boy yash';
// element.innerHTML='<b> killer bad boy</b>'
// console.log(element);
// console.log(element.innerHTML);



// let sel=document.querySelector('#first');
// sel=document.querySelector('.child');
// sel=document.querySelector('h1');

// console.log(sel);


//2 multi element selector

let elems=document.getElementsByClassName('child')
elems=document.getElementsByTagName('div')

// elems=document.getElementsByClassName('container')
// console.log(elems);
console.log(elems[1]);