const promiseOne = new Promise(function(resolve,reject){
 setTimeout(function(){
    console.log("function is resolved");
    resolve()
 },1000)
})
promiseOne.then(function(){
    console.log("promisses resolved")
})

//other way 

promiseTwo=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("method done")
   resolve()
    },1000)
}).then(function(){
    console.log("completed")
})


 //if we want to pass data 

 promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name:"shourav",email:"shouravs280@gmail.com"})
    },1000)
 }).then(function(user){
    console.log(user)
 })

 //when we get errors

 promisefour=new Promise((resolve, reject) => {
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"sam",email:"jdskjhi@gmail.com"})
        }else{reject("error")}
    },1000)
 }).then(function(user){
    
    return user.username
 }).then(function(username){
    console.log(username)
 }).catch(function(error){
  console.log(error)
 })

 //also work with asnc and await

 promiseFive=new Promise((resolve, reject) => {
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"sam",email:"jdskjhi@gmail.com"})
        }else{reject("error")}
    },1000)
 });
  async function consumerFive(){
   try {
    const response=await promiseFive
    console.log(response)
   } catch (error) {
    console.log(error);
   }
 }
 consumerFive()
    

 //api get and fetch

 async function sam(){
    try{
       const response= await fetch('https://api.github.com/users/hiteshchoudhary')
       const data=await response.json()
       console.log(data)
    }catch(error){
console.log("e",error)
    }
 }
 sam()

 fetch('https://api.github.com/users/hiteshchoudhary')
 .then(function(response){
    return response.json()
 })
 .then(function(data){
    console.log(data)

 })
 .catch(function(error){
    console.log(error);
 })