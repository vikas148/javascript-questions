//string properties and template litrals
const name='vikas';
const greeting='good morning ';
//for printing name and  greeting together
console.log(greeting+''+    name);

let html;
 html="<h1>This is heading tag</h1>"+"<p>This is paragraph tag</p>";
//  console.log(html);
//string functions
html=html.concat('vikas' , ' str2  ');
console.log(html);

console.log(html.length);

console.log(html.toLowerCase());
// console.log(html);

console.log(html.toUpperCase());

//in this(upper or lover cases) process the original html is safe that is not changing 

// console.log(html);


// console.log(html[0]); //it will give first  character

console.log(html.indexOf('h1'));//it will show the index of vikas
console.log(html.lastIndexOf('<'));
console.log(html.charAt(4));//it will print the 4th character of html strings
console.log(html.endsWith('str2'));//check krne ke liye ki html ends on str2 or not
console.log(html.includes('str2'));

console.log(html.substring(0,3));


console.log(html.slice(-4));//it will give sus last 4 character of html string use 0,4 

console.log(html.split(''));//it will split our string and add them inti an array use > < in input
console.log(html.replace('vikas','oops'));


//trmplete litrals
let fruit1='Orange';
let  fruit2='Apple';

//we can use `` insted of "" it make it easier write js easily and  effectively we can make variable in it by using ${}

let myhtml=`hello ${name} 
<h1>This is heading</h1>
<p>
you like ${fruit1} and ${fruit2}
</p> `;
document.body.innerHTML=myhtml;