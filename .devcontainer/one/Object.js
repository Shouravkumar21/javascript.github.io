//object literals



const mySym=Symbol("key1")
const obj={
    name:"idll",
    "fullname":"ffdasgildgk",///if we get this type of value we did not call it by . notation we required square bracket []
     age:99,
     [mySym]:"key22",
    address:".kdjbakjsvbkboi",
    pincode:2222,
}

console.log(obj.age) //but the best way to call is square bracket []

console.log(obj["age"]);
console.log(obj["fullname"])
console.log(obj[mySym]);

//if we try to call by .notation we get error
// because it is imposible to write or call


//IF we want to change the data then

obj.age=92;
console.log(obj.age);

//if we want to do not change any one in our data then we use 

Object.freeze(obj)
obj.name="gyfydgli";
console.log(obj.name);