let a=300//global scope
const b=400
// var c=400;
if(true){
let a=10;
const b=20;
 var c=30; //we do not prefer var because it used in block scope and functions 
console.log(a);//blocked  Scope

}
console.log(a);//global scope

console.log(c);

const Myarry=[23,45,6,7,8,99,0,0,0,8,8];

for (let i = 0; i < Myarry.length; i++) {
    const element = Myarry[i];
    console.log("",element);
}
console.log("--------------------------------ADITYA---------------------------------------------");

function one(){
    const username="Aditya";
    function two(){
        const website="www.google.com"
        // console.log(website);
        console.log(username);
    }
   // console.log(website);//here the error occurs because the parent function cannot access the child function can access the parent function
    two();

}
one();


//console.log(addtwo(5,6));//the problem occurs here due to hoisting because the javascript reads variable line by line this is variable function expression so thats wahy the error occurs here.
const addtwo=function(num1,num2){//function expression
    return num1+num2;
}

console.log(addone(5,6));// we can declare above function because it is not variable function expression so hpoisting doesn't works here
function addone(num1,num2){
    return num1+num2;
}


if(true){
    const usErname="adi";
    if(usErname === "adi"){
        const website="youtube";
        console.log(usErname+website);
    }
   // console.log(website);
}
//console.log(username);