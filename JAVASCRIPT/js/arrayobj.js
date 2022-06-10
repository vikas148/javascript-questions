//objects and arrays
let marks=[24,45,32,34,55,45];
const fruits=['Apple','mango','Pineapple','grapes'];
const mix=['str',88,[3,4,5]];

const arr=new Array(23,123,21,'orange');
console.log(arr);
console.log(marks);
// console.log(fruits);
console.log(fruits[0]);
console.log(mix);

console.log(arr.length);
console.log(Array.isArray(arr));//it will tell that this is array or not

arr[0]='vikas';
console.log(arr);


let value=marks.indexOf(34);
console.log(value);//show the index of element in array


//mutating or changing in array
// marks.push(78);
// marks.unshift(56);
// marks.pop();
// marks.shift();
// marks.slice(1,3);
marks.reverse();
console.log(marks);

let marks2=[3,34,5,4];
marks=marks.concat(marks2);


//objects
let myobj={
   firstname: 'harry',
    dhanda:'programing',
    isActive: true,
    marks3:[1,2,3,4]
}
console.log(myobj);
console.log(myobj.marks3);