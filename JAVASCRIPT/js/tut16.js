console.log('tut16');
// creating elements in dom
let element=document.createElement('li')
//Add a class name to the li element
let text=document.createTextNode('i am a text node by jas')
element.appendChild(text)
element.className='childul';
element.id='creates';
// element.setAttribute('title','my title');
// element.innerText='hello this is created by javascript'
let ul=document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);

console.log(element);    


//replace element
let elem2=document.createElement('h3')
elem2.id='elem2';
elem2.className='elem2';
let tnode=document.createTextNode('this is created for elem2')
elem2.appendChild(tnode);

element.replaceWith(elem2   )

let myul=document.getElementById('myul');
myul.replaceChild(element,document.getElementById('fui'))

myul.removeChild(document.getElementById('lui'))

console.log(elem2);

let pr=elem2.getAttribute('id');//use hasatrribute
elem2.removeAttribute('id')
console.log(pr);