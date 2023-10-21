//the this keyword refers to an object.

const user={

    username:"aditya",
    price:999,
    welcomeMessage:function() {
      console.log(`${this.username} welcome to website`)
       console.log(this.price);
    },
}
user.welcomeMessage()
user.username="sthiti"
user.welcomeMessage()


// console.log(this);


// const chai=function(){
//     const username1="aditya"
//     console.log(this.username1);
// }



const chai=()=> {
    let username1="aditya"
    console.log(this);
}
// chai();

const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(4,5))


const addOne=(num1,num2)=>(num1+num2);//implicit return 
console.log(addOne(3,4));

const say=(num1)=>({username3:"hitesh"})//implicit return with objects

console.l2.log(say(1));



