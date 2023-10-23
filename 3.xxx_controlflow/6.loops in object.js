const myObject={
    js:"javascript",
    cpp:"c++",
    Ruby:"Ruby",
    swift:"swift"
}

for (const key in myObject) {

    console.log(`${key} => ${myObject[key]}`);    

}

const pro=["js","cpp","java","bun","flutter"]

for(const key in pro){
    console.log(key);
}


//for of loop -----------------------------------------
pro.forEach((item,index,pro)=> {

    console.log(item,index,pro);
    
});
pro.forEach((item,index,pro)=> {

    console.log(item);
    
});


const myobj=[
    {
        name:"aditya",
        email:"apsahoo@gmail.com",
    },
    {
        name:"adi",
        email:"bbbbb@gmail.com",
    },
    {
        name:"amit",
        email:"amit@gmail.com",
    },
    {
        name:"ashish",
        email:"ashish@gmail.com",
    },
    
     ]

     myobj.forEach((item) => {

        console.log(`${item.name}'s email is ${item.email}`);
        
     });






const arr=["anurag","ashish","aditya","sthiti"];

function print(item) {
    console.log(item);
}
arr.forEach(print)
 



