// const coding=["js","cpp","java","python","Golang"]

// const values=coding.forEach(element => {
//     // console.log(element);
//     return element;
// });

// console.log(values);


const MyNums=[1,2,3,4,5,6,7,8,9,10];

// const values=MyNums.filter((num)=>(num <= 4));
// console.log(values);

// const val=(()=>({username:"aditya"}));//implicit return 
// console.log(val());


const New=[];

MyNums.forEach((num)=>{
    if(num<4){
        New.push(num);
    }
})
console.log(New);


const nums=[1,2,3,4,5,6,7,8,9,10];

const val=nums
              .map((nums) => nums * 2)
              .map((nums)=>nums+1)
              .filter((nums)=>nums<12)
console.log(val);//chaining

   
const numb=nums.reduce((acc,currvalue)=>{
    console.log(`acc:${acc},currvalue:${currvalue}`);
return acc+currvalue; 
},0)

console.log(numb);


const shoppingcart=[
    
    {
        price:2999,
        CourseItem:"js",

    },
    {
        price:999,
        CourseItem:"PYTHON",
    },
    {
        price:12999,
        CourseItem:"app dev",

    },
    {
        CourseItem:"data science",
        price:2999,

    },

]

const val2=shoppingcart.reduce((acc,item)=>acc+item.price,0);
console.log("Total_price :",val2);



const books=[
    {},
  
]