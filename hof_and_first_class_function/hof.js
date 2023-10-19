const powerTwo = (n) =>{
   return n ** 2;
}

powerTwo(3)

let p=powerTwo(3);
console.log(p);

//higher order function
function powercube (powerTwo,n){
    return powerTwo(n)*n;
}
console.log(powercube(powerTwo,3));


function sayhello() {
    return ()=>{
        console.log("hello  aditya");
    }
}
let g=sayhello();
// console.log(g);

// g();

const higherorder= n =>{
     const onefun =m=>{
        const twofun=p=>{
            return m+n+p;
        }
        return twofun;
     }
     return onefun;
}
console.log(higherorder(2)(3)(4));



const myNums=[2,3,4,5]
const sumarray =arr=>{
    let i=0;
    arr.forEach(function(element){
        i+=element
    });
    return i;
}

console.log(sumarray(myNums));

// setInterval(() => {
// console.log('additya');
// }, 100);

setTimeout(() => {
    console.log('hello sthiti');
}, 2000);


//shopping cart

ley