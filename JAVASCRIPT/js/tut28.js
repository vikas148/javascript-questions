console.log('tut 28');
/*
object litral : object.prototype se suru hota hai and it containt some methods in it

object ke prototype me direct change nhi kr skte constructor bna ke fir kr skte hai
or hme khud ke oobject me hi change krna chahiye  engine ke objects ko overwrite nhi krna chahiye 

constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto_()

we can use them
*/

//object litral
// let obj={
//     name:"harry",
//     channel:"code with harry",
//     Address:"Mars"
// }
// console.log(obj);

function obj(givenName){
this.name = givenName
}

//how we make prototypes
obj.prototype.getName=function(){
    return this.name;
}
obj.prototype.setName =function(newName){
this.name=newName
}
let obj2=new obj("harry");//it will use constructor prototype
console.log(obj2);  