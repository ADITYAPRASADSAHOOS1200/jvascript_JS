function sayMyname(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
   console.log("A");
}

sayMyname();


function AddTwoNumbers(num1 ,num2){
//console.log(num1+num2);
// } 
//   let result=num1+num2;
//   return result;
console.log("hitesh",num1);
 return num1 + num2;

}

let result=AddTwoNumbers(4,7);
console.log("RESULT :",result);

function hero(username="sthiti"){
    if(!username){
        console.log("please provide your name");
        return;
    }
 return`The ${username} is logged in` ;
}
console.log(hero("Aditya"));
// const fun=hero("aditya");
// console.log(fun);

function calculateCartPrice(val1,val2,...num1){//rest or spread

   return num1;

    // return [num1,val1,val2];
}
console.log(calculateCartPrice(200,400,500,600));

const user={
    Product:"DRESS",
    price:"4999",
}

function Products(anyobject){

    console.log(`The selling price of this  ${anyobject.Product} is ${anyobject.price} `);

}
Products({Product:"MERCEDES",price:"1,222222222",});




const newARRAy=[200,300,400,500];
function arryflow(get) {
    // console.log(get[1]);
    return(get[2])
}
console.log(arryflow(newARRAy));
