//dates

let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toLocaleDateString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());


// let myCreatedate=new Date(2023,0,23,5,3)
// myCreatedate=new Date(2023,0,23)
let myCreatedate=new Date("October-18-2023");
console.log(myCreatedate.toLocaleString());


let mytimestamp = Date.now();//timstamp
console.log(mytimestamp);
console.log(myCreatedate.getTime());
console.log(Math.round(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);


const DATE = new Date();

// console.log(DATE.toLocaleString('default',{weekday:"Long",}));