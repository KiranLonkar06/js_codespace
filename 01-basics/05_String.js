const name="Kiran Lonkar";
const repoCount=90;

// console.log(name+repoCount+ "hello");  old syntax
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String ("Kiran-Lonkar");

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4));
console.log(gameName.indexOf('K'));
// const newString=gameName.substring(0,3);
// console.log(newString);
// const anotherString=gameName.slice(-5,6);
// console.log(anotherString);
const newstring1="   Kiran   ";
console.log(newstring1);
console.log(newstring1.trim());
console.log(newstring1.trimStart());
const url="https://kiran.com/kiran34@3455lonkar";
console.log(url.replace('@','$'));

console.log(url.includes('kiran'));
console.log(gameName.split('-'));
console.log(gameName.small());
