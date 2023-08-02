function greet(){
    console.log("hi there");
    console.log("how are you");
}
greet();

function sqr(x){
 //console.log(x*x);
  return x*x;
}
sqr(4)

let a=sqr(4)
console.log(a);


function add(x,y){
  return x+y;
}
console.log (add(1,3));
//arrow function
const square=(x,y)=>x*y
console.log(square(4,2));
let sumoftwonumber=(x,y)=>x+y
 console.log(sumoftwonumber(3,4));

 let sumdifference =(x,y)=>({sum:x+y,difference:x-y})

 console.log(sumdifference(4,5));

//anonymous function
 let x = function () {
    console.timeLog(9)
 }

 x();
 //self invoking function

(function exec(){
  console.log("named")
}
)();

 


   