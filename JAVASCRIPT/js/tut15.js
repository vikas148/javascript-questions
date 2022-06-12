console.log('tut15');

let cont=document.querySelector('.no')
cont=document.querySelector('.container');
// console.log(cont);
// console.log(cont.childNodes);//it will give us all things including blank lines as text

// console.log(cont.children);//it will not give us blank lines as text

let nodename=cont.childNodes[0].nodeName;
let nodeType=cont.childNodes[0].nodeType;
console.log(nodename);

/*node types
1 for element
2 for Attribute
3 text node 
8 comment
9 document
10 doctype


*/
console.log(nodeType);


// console.log( cont.firstElementchild);
 // same thi we have last child,child element count,
 //container.firstElementchild.parentNode 
 //container.firstElementchild.nextSibling 
 //container.firstElementchild.nextElementSibling 
 //container.firstElementchild.nextElementSibling.nextElementSibling 
