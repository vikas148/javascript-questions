console.log("lets lern arrays");

let marks=[23,45,67,89,34,67];
const fruits=['orange','Apple','Pineapple'];
const mixed=['strt',89,[3,5]];  

//we can also crate array by using array constructor

const arr= new Array(23,43,554,'orange');
console.log(arr);
console.log(mixed);
console.log(fruits);
console.log(marks);

console.log(fruits[0]);

console.log(arr.length);
console.log(Array.isArray(arr));

//we can also change in array
arr[0]='vikas'
console.log(arr);

let value=marks.indexOf(34);
console.log(value);


//mutating ya modifying an array
// marks.push(199);
marks.unshift(200);
// marks.pop();
// marks.shift();   
// marks.splice(1,2);
// marks.reverse();
let marks2=[1,2,3,4];
// marks.concat(marks2);
marks=marks.concat(marks2);
console.log(marks);

//objects

let myobj={
    name:'vikas',
    channel:'live chillkonje',
    isactive:true,
    marks:[1,4,56]
}
console.log(myobj);
console.log(myobj.channel);