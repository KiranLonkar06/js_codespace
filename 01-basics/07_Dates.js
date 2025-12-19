// let mydate = new Date();
// console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


let myNewDate = new Date("2023-11-12");
// console.log(myNewDate.toLocaleString());


let myTimeStramp = Date.now();
console.log(myTimeStramp);
console.log(myNewDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);

newDate.toLocaleString('default',{weekday : "short"});
