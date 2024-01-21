let sam= "12344";
 

console.log(typeof "sam");
console.log(typeof(sam));

//if we want to change data typethen

let valueInNumber=Number(sam);
console.log(typeof (valueInNumber));

// 33->number
//"333"->string
//"33abc"->nan
//null ->null

//"true"->1
//"false"->0


////operatio////


let value=9;
let negValue=-value;
console.log(negValue);


//(2+2)=4
//(2**2)=2^2
//(2*3)=6


let Sam="shourav";

console.log(Sam.toUpperCase());
console.log(Sam.length)
console.log(Sam.charAt(3));
console.log(Sam.indexOf("u"));

//slice
let anotherStr=(Sam.slice(1,3))
console.log(anotherStr);


//to remove extra space

let Hitesh="    bkbdo kndandnlnl lknpdsndedd/    ";
console.log(Hitesh);
console.log(Hitesh.trim());


let url="https//bjkdsbv/bjkbfsfb/20//vm";
console.log(url.replace("20","-"));
console.log(url.split("-"));
