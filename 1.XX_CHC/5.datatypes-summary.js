// #primitive
//number boolean null symbol string Bigint

const score= 100
const scotrevalue=100.3
const isloggedin=false
const outsideTemp=null
let useremail;

const id=Symbol('123')
const anid=Symbol('123')
console.log(id == anid);


const bigNumber=345678940399990312n
console.log(typeof bigNumber);
//Reference(Nonprimitive)
//arrays,object,functions

const heros=["shaktiman","naagraj","doga"]
let my_obj={
     name:"hitesh",
     class:"standard",
}

console.log(my_obj);

const myfunction=function () {
    return 2*2;
}
console.log( myfunction());

console.log(typeof null);


console.log("-----------------------------------");

//stack are used in primitivedatatype.you get copy from stack
//heaps are used in nonprimitivedatatype.you get reference from stack

let value1="234";
let value2=value1;
console.log("value2",value2);
value2="345";
console.log("value2",value2,"value1",value1);


let user1={
    name:"aditya",
    age:23,

}

let user2 = user1;
console.log(user2);
user2.name="parag"
console.log(user2.name);
console.log(user1.name);