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

// memory is off two types first is stack memory(Primitive) and another is heap memory (non primitive)


// stack memory primitive
// heap memory non primitive

let myYoutubeName="kiran's coding style"

let anotherName=myYoutubeName;

console.log(anotherName);

anotherName="Kiran Lonkar";

console.log(myYoutubeName);
console.log(anotherName)

let userOne ={
    email:"abc@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;
userTwo.email="kiranlonkar4656@google.com";
console.log(userOne.email);
console.log(userTwo.email)
