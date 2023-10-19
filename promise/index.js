function createPromise(){
  return new Promise((resolve, reject) => {
    console.log("promise working well")
    setTimeout(() => {
      resolve(10);
    }, 0);
  
  })
}

let x=createPromise();
x.then((value)=>{
console.log("program done",value);
}).catch((value)=>{
  console.log("not done",value);
})


console.log("this is done");

// for(let i=0;i<20000;i++){
//   console.log(i);
// }