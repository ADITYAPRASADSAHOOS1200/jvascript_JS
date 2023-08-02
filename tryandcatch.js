// try{
//     let x=undefined;
//     console.log(x[0]);

// }catch(err){
//    console.log("error handling in catch",err)
// }
// finally{
//     console.log("finally always get executed ")
// }
// console.log("x")

try{
    console.log("hello");
    console.log(a);
} catch(err){

    console.log("handled",err);
}finally{
    console.log("end")
}

console.log("end")