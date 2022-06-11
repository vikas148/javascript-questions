console.log('welcome in tut 12');
let a=document;
// a=document.all;//give all tags
// a=document.body;
// a=document.forms;


//this will give error

// a.array.forEach(function(element) {
// console.log(element);    
// });

//this indicate ki a ki help se ek array bna lo o usko iterate kr lo
Array.from(a).forEach(function(element) {
    console.log(element);    
    });
    

console.log(a);

// a=document.links;
a=document.links[0].href;
console.log(a);