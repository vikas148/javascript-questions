console.log('welcome in the tut 30');

const proto={
        slogon: function(){
            return `This company is the best`;

        },
    changename: function(newName){
           this.name = newName
    }
}
//this create harry object
const harry = Object.create(proto);
harry.name ="Harry";
harry.role="programmer";
harry.changename("vikas")
console.log(harry);

//this will also create harry object
const harry1=Object.create(proto,{
    name:{value: "harry",writable: true },
    role:{value: "programmer"},
})
harry1.changename("Maggu")
console.log(harry1); 



//Employee constructor
function Employee(name,salry,experiance){
this.name=name;
this.salry=salry;
this.experiance=experiance;
}
//sslogan
Employee.prototype.slogon=function(){
    return `This company is the best regards ${this.name}`;

}

let harry3=new Employee("harry",234543,87);
console.log(harry3);
console.log(harry3.slogon());

//programmer
function programmer(name,salry,experiance,language){
    Employee.call(this, name,salry,experiance)//inherit from employee slogan nhi aayega
    this.language=language;
}
//inherit the prototype
programmer.prototype=Object.create(Employee.prototype); //slogan works here
//manually set the constructor
programmer.prototype.constructor=programmer;
let rohan=new programmer("rohan",343234,34,"javascript");
console.log(rohan);