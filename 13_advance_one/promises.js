const promise1 = new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000)
});
promise1.then(function(){
    console.log("promise consumed");
})


const promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task two");
        resolve()
    },1000)
}).then(function(){
    console.log("async2 resolved")
})

const promise3 = new Promise(function(resolve ,reject){
    setTimeout(function(){
        resolve({username :"Kiran", email:"kiran@gmail.com"})
    },1000)
})

promise3.then(function(user){
    console.log(user)
})