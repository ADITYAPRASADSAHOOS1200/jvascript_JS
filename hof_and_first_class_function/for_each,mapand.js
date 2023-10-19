let arr=[2,2,4]
arr.forEach(function (elements,index,arr) {
    console.log(index,elements,arr);
})

//for_Eachloop in arrow_functions

arr.forEach((elements)=>{
    console.log(elements);
})

const heros=["naagraj","dhruva","doga","maniraj"];

heros.forEach((elements)=>{
    console.log(elements.toUpperCase());
})

//map
arr.map(function(element,index,arr){
    console.log(element,index,arr);
})



heros.map((h)=>{console.log(h.toUpperCase());})


//filter

// console.log(heros);
const herosWithRAj=heros.filter((h)=>{
 return h.endsWith('raj');

});
console.log(herosWithRAj);

//shopping cart

const cartbill=[20,30,50];
const sumCartBill=cartbill.reduce((prev,curr)=>prev+curr,0)
console.log(sumCartBill);



const gamescore=[200,100,310,400,500,600]
///if the values are numbers
const GAmeScoreCheck=gamescore.every((v)=>{
    typeof v==='number';
})

console.log("check :",GAmeScoreCheck);


//find score above 200

const above200 =gamescore.find((score)=> score>200)

console.log(above200);


