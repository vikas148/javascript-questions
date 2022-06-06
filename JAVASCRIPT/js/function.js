// console.log("this is function tuitorial");
// function greet(name,thnx="thank you") {
//     // console.log(`Happy birthday ${name} and ${thnx}`);
//     // return 2;
//     let msg=`Happy birthday ${name} and ${thnx}`
//      return msg;
// }
// let  name ='skillf';
// greet(name,'thnx a lot');
// let val =greet(name);
// console.log(val);
// // console.log(`Happy birthday ${name}`);

// const myobj={
// Name:"Harry",
// game:function() {
//     return "GTA";
// }
// }
// console.log(myobj.game());


// //
// let arr =['fruit','vagetable','furniture'];
// arr.forEach(function(element,index,array) {
//     console.log(element,index);
// });


var i=45;
console.log(i);
function ui(name) {
    var i=9; //it is local scope but if we use let insted of var then it  will not modify the global
    i=9 //it will modify global i  
    console.log(i);
    return `this is a ${name} ui `
}
console.log(ui("Harry"),i);
