/*
time and date ko hum activity log store krne ke liye bhi use krte hai 
is se pta chl jata hai ki kis user ne kya kiya tha

date is a object type
*/

console.log('tut24');
let today=new Date();
// console.log(today);
let otherdate= new Date('8-4-2003 04:54:08');
otherdate= new Date('June 13 1976 ');
otherdate= new Date('09/16/1976 05:54:08');
// console.log(otherdate);
let a;

a=otherdate.getDay();
// a=otherdate.getDate();
// a=otherdate.getMinutes();
// a=otherdate.getHours();
a=otherdate.getMonth();

//more methods so many more methoda are here on time

console.log(a);  //4  for thursday

otherdate.setDate(23);
otherdate.setMonth(0) //0=january 1=feb
console.log(otherdate);
