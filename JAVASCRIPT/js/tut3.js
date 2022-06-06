// variables in js?
//we use let var const keyword for declaring variable
//what is declaration

var name="harry";
 var channel;
 var marks=45;
 marks=0;//we can do this here in var but not in const

// channel="code with mia"
console.log(name,channel,marks);
/*
Rules for creating js variables

1. can't start with numbers
2.can start with latter,underscore,or $
3.case sensitive
*/

var city='delhi';
console.log(city);

const ownersname="hari ram";
// ownersname='harry'  //it will throw an error
console.log(ownersname);


//Let: its has block scope level means only runs in a block of code

{
    let city='rampur';
    city='kolkata';
    console.log(city);//delhi print nhi hoga kyuki block ke andr rampur hai to prefrence iski jyada hogi
}
console.log(city);


const arr1=[13,14,54,67,3];
arr1.push(45);
console.log(arr1);

