const promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});
promise1.then(function () {
  console.log("promise consumed");
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task two");
    resolve();
  }, 1000);
}).then(function () {
  console.log("async2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Kiran", email: "kiran@gmail.com" });
  }, 1000);
});

promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Kiran", password: "123" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  }).finally(()=>console.log("the promise is either resolved or rejected"));

  const promise5 = new Promise(function(resolve , reject){
     let error = true;
     if(!error){
        resolve({username:"js", password:"123"})
     }else{
        reject('Error: js went wrong')
     }
  })

  async function consumePromise5(){
    try{
        const response = await promise5;
        consol.log(response);
    }catch(error){
      console.log(error);
    }
  }
  consumePromise5();

// async function getAllUser(){
//   try{
//     const response =await fetch('https://jsonplaceholder.typicode.com/users');
//     console.log(response)
//   const data = response.json()
//   console.log(data);
//   }catch(error){
//     console.log("E : error");
//   }
// }
// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log('data');
})
.catch((error)=>{
  console.log('error');
})