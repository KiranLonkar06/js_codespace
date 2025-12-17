// data type type premitive and non premitive(reference type)
// these type is done based on call by value and call by reference

//means how data is stored and how it is called from the memory

// primitive
// 7 data type:
// string ,number, boolean , null, undefined , symbol , BigInt
// non primitive also known as reference type
// arrays , object , functions 

// javascript is dynamically typed language 
const id =Symbol('123');
const anotherId= 
Symbol('123');

console.log(id === anotherId);

const bigNumber = 345624556678222334n ;

const heros = ["shaktiman" ," nnagraj" ," doga"];

let myObj={
    name:"Kiran ",
    age:13,
}

const myFucntion= function(){
    console.log("hello world");
}

console.log(typeof out);
