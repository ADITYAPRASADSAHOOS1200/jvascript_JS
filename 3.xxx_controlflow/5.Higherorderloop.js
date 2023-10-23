const arr=[1,2,3,4,5];
for (const num of arr) {
console.log(num);
}

const str="greetings";
for (const greets of str) {
    console.log(`each char is ${greets} `);
    
}

//MAP is only iterable on for of loop
const map = new Map();
 map.set('India',"Mumbai")
 map.set('USA',"washinton dc")
 map.set('Australia',"Sydney")

 console.log(map);

//  for (const key of map) {
//     console.log(key);
//  }
 for (const[key,value] of map) {
    console.log(key,':-',value);
 }


