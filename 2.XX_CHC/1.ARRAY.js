const myarr=[1,2,3,"aditya",89]
console.log(myarr);


console.log(myarr[0]);
console.log(myarr[2]);

const myARR = new Array(2,4,5,6,7);
console.log("accesing eelement",myARR[0]);
console.log("length",myARR.length);
//push
myARR.push(10)
console.log("push 10",myARR);
console.log("length",myARR.length);
//pop
console.log("POP",myARR.pop());
console.log("length",myARR.length);
//unshift
console.log("unshift",myARR.unshift(9));
console.log(myARR);
//shift
console.log("shift",myARR.shift());
console.log(myARR);
console.log(myARR.includes(4));
console.log(myARR.indexOf(6));

console.log("----------------------------------------------------------------------------------");



//joining in arrays

// const  newARR=myARR.join()
// console.log(myARR);
// console.log(newARR);
// console.log(typeof newARR);

//slice //splice

console.log("A ",myARR);
const my1=myARR.slice(1,3);
console.log(my1);
console.log("b ",myARR)

const myn2=myARR.splice(2,3);
console.log(myn2);
console.log("c",myARR);



//Array part 2

const marvel_heros=["Thor","Ironman","Spiderman"];
const DC_heros=["superman","batman","flash"];
// marvel_heros.push(DC_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][2]);

const x=marvel_heros.concat(DC_heros)

console.log(x);

const y=[...marvel_heros,...DC_heros]
console.log(y);//spread

const anARr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(anARr);

const usablearray=anARr.flat(Infinity)
console.log(usablearray);

console.log(Array.isArray([2,3,4,5,6]));
console.log(Array.from("ishitesh"));
console.log(Array.from({name:"adi",age:"22"}));


let score1=1200;
let score2=2939;
let score3=90;
console.log(Array.of(score1,score2,score3));



