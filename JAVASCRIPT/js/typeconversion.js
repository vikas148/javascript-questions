//type conversion and type coercion
let myvar;
// myvar=34;                
myvar=String(34);
console.log(myvar,typeof(myvar));

// let booleanvar=true;
let booleanvar=String(true);
console.log(booleanvar,(typeof booleanvar));

// let date= new Date();
let date= String(new Date());
console.log(date,typeof(date));

// let arr=[1,2,3,4,5];
let arr=String([1,2,3,4,5]);

console.log(arr,typeof(arr));


let i=8;
console.log(i.toString());



// let str="13334";
let str=Number("13334");
//  str=Number("133d34");  //it gives nan
 str=Number(true);
   
     
console.log(str,typeof(str));


// let number='34';
// let number=parseInt('34.999');//only pass 34 because it only pass intiger we can use parseFloat or Number fxn
let number=Number('34.999');//pass 34.999 


console.log(number,typeof(number));


//type corcion
// let mystr="698";   //it will concatinate the number and string out put will be 69834
let mystr=Number("698");
let mynum=34;
console.log(mystr+mynum);
