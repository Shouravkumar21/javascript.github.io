let ram=499;
console.log(ram);
console.log(new Number(ram))//it given in square bracket with [Number:499];

//to change data type

console.log(ram.toString());

//to add after .00 value use in ecomers to give price


console.log(ram.toFixed(2));

//to calculate length
console.log(ram.toString().length);

//a large number add commas

let oter=18028937289787439874832179047061309;
console.log(oter.toLocaleString())


//if we want to add comma by in endian standard foam

console.log(oter.toLocaleString("in-IN"))

//TO GET ROUD UP value


console.log(Math.round(6.79797))

//in this if we get any extra value it get round value propeer 1 number incresses

console.log(Math.ceil(7777.2))


//TO get max and min value

console.log(Math.min(6,33,4,5,66,63,2,1,44,88,6));

//For maximum Vlaue 

console.log(Math.max(7739287984,387,12753816,537634))

console.log(Math.random(Math.floor)*19 +1);

const max=20;
const min=10;
 
const neww=(Math.random(Math.floor())*(max-min+1)+min )
console.log(neww.toFixed(2))
