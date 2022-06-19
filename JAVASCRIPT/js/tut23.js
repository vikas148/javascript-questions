console.log('inside tut 23');

let x= 3;
let y=6;
let z;
z=x+y;
z=x-y;
z=x*y;
z=x/y;


//exploring the math object
z=Math;
z=Math.PI;
z=Math.E;

// z=Math.round(5.3) //ye 5 kr degaa
z=Math.ceil(5.3) //it help in rounding or ye sb ko ceil pr pahucha dega yha pr 5.3 bhi 6 ho jayega round me 5 hota
z=Math.floor(5.7) //point ke baad sb hta kr chhota kr dega isko 5 kr dega test for -5.6 also

z=Math.abs(5.3) //it prints absolute value of number minus ko plus me print krega
   
z=Math.sqrt(5); //square root of any number

z=Math.pow(2,3)// 2 ki power 3=8;

z=Math.min(2,3,4,56,67,89,556)
z=Math.max(2,3,4,56,67,89,556)

//here a is laying in b/w o to 1 so it will give us decimal values
//if we want thet z should lie in b/w 0 to 100 then we will multiply it with 100;
//if you want to lie Z b/w 10 to 100 then we will add 10 and ultiply with 100 
//10+ z*(100-10)

z=Math.random();
z=100*Math.random() // 0 to 100
z=50+(100-50)* Math.random() // 50 to 100
z=Math.ceil(50+(100-50)*Math.random()); //perfect integer no no decimal
console.log(z);