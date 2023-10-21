//imediately invoked function expression(IIfe)

(function chai(){
    //named IIfe
    console.log("db connected");
})();

//due to pollution of global scope 
((name)=>{
    //unamed iife
    console.log(`dbconnected ${name}`);
})('aditya');

