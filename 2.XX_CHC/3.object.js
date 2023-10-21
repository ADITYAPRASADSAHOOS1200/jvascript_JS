


//const tinderUSer=new Object();//it is an singleton object

const tinderUSer={}//it is a non singleton object
  tinderUSer.id="234590";
  tinderUSer.name="ADITYA";
  tinderUSer.email="apsahoo@gamil.com";
  tinderUSer.isLoggesin=true;
console.log(tinderUSer);

const RegularUser={//nested objects
name:"ADITYa",
email:"apsahoo@gmail.com",
fullname:{
    username:{
        firstname:'sthiti',
        lastname:'pragnya'
       }
    }
}

console.log(RegularUser.fullname);//to accessing nested object
console.log(RegularUser.fullname.username);//to accesing nested object inside of an object
console.log(RegularUser.fullname.username.firstname);





const obj1={1:"a" ,2:"b"};
const obj2={3:"a" ,4:"b"};
const obj4={5:"d",6:"t"}

// const obj3=Object.assign({},obj1,obj2,obj4);//it used to combine  objects 


const obj3={...obj1,...obj2,...obj4} //obj spread
console.log(obj3);


// data ae retrieving from database and it is covered with array
const obj=[
  {
  id :"1234",
  email:"xxx.com",

  },
  {
  id :"1234",
  email:"google.com",

  },
  {
  id :"1234",
  email:"Microsoft.com",

  }
];

console.log(obj[0].email);
console.log(obj[1].email);
console.log(obj[2].email);

console.log(Object.keys(tinderUSer));

console.log(Object.values(tinderUSer));

console.log(Object.entries(tinderUSer));

console.log(tinderUSer.hasOwnProperty("isLoggesin"));
console.log(tinderUSer.toLocaleString());