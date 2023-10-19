const score=400
console.log(score);

const balance=new Number(100)
console.log(balance);
// console.log(balance.toString().length);
console.log(typeof balance);
console.log(balance.toFixed(3));

const otherNumber=123.094;
console.log(otherNumber.toPrecision(4));

const num1=1500;
console.log(num1.toLocaleString('en-In'));

console.log(Math.abs(-4));
console.log(Math.round(1.233));
console.log(Math.ceil(1.2));
console.log(Math.floor(1.6));
console.log(Math.max(34,45,5));
console.log(Math.min(34,45,5));
console.log('===================RandoM==============================');
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);


///formula

const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min);


//