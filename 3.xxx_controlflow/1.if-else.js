const isuserLoggeedin=true;
if(isuserLoggeedin != false){

console.log("program is running smoothly");
}

if(2 == "2"){
    console.log("executed");
}

// if(true){
  
// }
// if(false){

// }

// if(9>=3){
//     console.log("yes it is greater than three");
// }
// else{
//     console.log("it is not greater");
// }

// if(2!=2){
//   console.log("its equal");
// }else{
//     console.log("done its not equal");
// }

if(6 === "6"){
    console.log("executed");
}else{
    console.log("its not");
}

// let temp=41;
// if(temp<50){
//     console.log("less than 50");
// }else{
//     console.log("nor equaL TO OR LESS THAN 50");
// }

// let score=300;
// if(score>100){
//     var power="fly";
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);//it is accessed by var because it is an global scpoed variable

let score=300;
if(score>100){
    const power="fly";// it is an blocked scope variable.
    console.log(`user power ${power}`);
}
// console.log(`user power ${power}`);