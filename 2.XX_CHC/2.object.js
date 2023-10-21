//singleton-//object 

//object literals

const mysym1=Symbol("key2")
const JSuSer={
   name:"Aditya",
   "fullname":"hitesh",
   [mysym1]:"mykey2",
   age:18,
   location:"kedarnath",
   email:"apsah00555@gmail.con",
   isloggedin:true,
   lastlogindays:["Monday","saturday"]
}
console.log(JSuSer["fullname"]);

console.log(JSuSer.email);

console.log( JSuSer["email"]);

console.log(typeof JSuSer.lastlogindays);

console.log( JSuSer[mysym1]);

JSuSer.email="adityaandsthiti"//update
console.log(JSuSer.email);

//onject.freeze
// Object.freeze(JSuSer);
JSuSer.name="adisthiti"
console.log(JSuSer.name);
//console.log freeze

console.log(JSuSer);


JSuSer.greeting=function (){
   console.log("hello js");
}
console.log(JSuSer.greeting);


JSuSer.greetingtwo=function (){
   console.log(`hello js ${this[mysym1]}`);
}
console.log(JSuSer.greetingtwo());


