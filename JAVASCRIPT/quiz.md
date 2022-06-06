# Javascript quiz  (Basic Level) -

| Name | Email | Address |
|------|-------|---------|
|vikas bairwa| vb334531@gmail.com |sanganer jaipur|
# Theory
1 what is **javascript** ?
>>javascript is the programming language for the websites. it's a dynamic programing language also


2 What is difference B/W **let** and **var**
>> **var** is used as a global scope variable
**let** is used as a block level scope variable

3 Why do we prefer **const** over **var**?
>>since we know that **var**  has global scope in the whole program , and we can manuplate its values easily.
but sometimes we don't want to change our values in the entire program
like **pi=3.14**
or sometimes programmers changed thease values by mistake 
so if we use **const** at the place of **var** then we cant change the value of const in entire program

4 What is the use of javascript in **web browsers**?
>>we can  run our java script in the browser console directly for testing our scripts and implement more codes and after that we can use them in our real code
browsers have inbuilt javascript engine that executes the code on       user's device.
its provide DOM for  intracting with code

5.What are **Objects**?
>>objects are the refrence data types in the javascript
they are used for storing the  key and values.

6 What is an **array** and how is it **different** from an **Object in Javascript**?
>>an **Array** is a refrence data type that can stores values like number string boolen etc
but it cant store the key and values
but **object** is also a refrence datatype but it can store the key values

7 What is a **function**?
>>**functions** are the refrence datatype
or we can say that it is a set of instructions that is made to perform to task and reduces the code length.
we can call it anywhere in program

8 How can we implement **call by value** and **call by reference** in Javascript
>> answer this queestion after reading the concept

9 What are the **primitive data types** in **Javascript**?
>> javascript has 5 primitive datatypes 
    1. string
    2. number
    3. boolean
    4. Null.
    5. undefined
>>6th one is  introduced in es6
    6. symboll
>>primitive data types are allocated memory space in stack    



9 .What is **DOM**?
>>DOM is stand for document object model this is an API for HTML and XML 
we can see the structure of style of the document in dom

10 Why do we need **DOM**?
>>we can manuplate in the code in the browser by using it and its make easy to devlopers life
# programs
1 **Program to average of array nums in javascript**
```
 array=[10,20,30];

var total=0;
    for (let i = 0; i < array.length; i++) {
        total +=array[i];
        
    }
    var avg = total/array.length;
    console.log(avg);
```
2 **Program to swap numbers by refrance** 
```
let a=5;
let b=6;
let c;
console.log("the vale of a",a);
console.log("the value of b",b);
c=b;
b=a;
a=c;
console.log("the vale of a after swap",a);
console.log("the value of b after swap",b);

```
3 **Print the fibonacci sequence?**
```

```
4 **Sort an array by both ascending and descending order?**
```
```
5 **Show a variable value in an HTML webpage using DOM?**
```
let age=18;
document.write(age);
```
