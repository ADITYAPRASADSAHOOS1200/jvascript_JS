function h(x,fn){
     console.log(x);
     fn(x);
}
//synchronous callback

h(4,function(){
    console.log("done with call back");
})

// function exec(n) {
//     console.log("the square of n",n*n);
//   }

h(10,function exec(n){
    console.log("the square of n",n*n)
})

h(2,(n)=>{
console.log(n*n);
})
    
//asynchronous callbacks


console.log("start")
setTimeout(() => {
    console.log("timer done");
}, 100);

console.log("end");
console.log("start2")
setTimeout(() => {
    console.log("timer done2");
},0);

console.log("end2");


