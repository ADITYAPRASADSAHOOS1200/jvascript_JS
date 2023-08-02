//1
let obj={id:101,name:'alex',salary:20000};
//2
let emp=new Object();
emp.id =102;
emp.name ='adi';
emp.salary=700000;
console.log(emp);
console.log(obj);




//key value access fetch
console.log(emp.id);
console.log(emp.name);
//key value access updation
emp.salary=13000;
emp.id=14;
console.log(emp);
//deletion
delete emp.id
console.log(emp);

//3
function Emp(i,n,s){
    this.id=i;
    this.name=n;
    this.salary=s;
 
 }
 const e=new Emp(103,'ajay',300);
 console.log(e);