let arr=[1,2,3,4,5];//use to add last elment 
arr.push(6,7);
console.log(arr);
//remove last elments
arr.pop();
console.log(arr);

//remove starting elememnt
arr.shift();
console.log(arr);
//adding elemnts from start
arr.unshift(9)
console.log(arr)
//conacatenate
let a1=[1,2,3,4]
let a2=[5,6]
let a3=a1.concat(a2)
console.log(a3);

//join
let s=a3.join("@")
console.log(s);
//array reverse
a3.reverse();
console.log(a3,"reverse")
//indx of
console.log(a3.indexOf(4));
//slice an old array to new array
let arr1=[1,2,3,4,5,6];
console.log(arr1.slice(2,5))

//splice inser(t element in a middle
arr1.splice(1,1,11)
console.log(arr1)


let arr3=[1,2,3,4]
console.log(typeof(arr3));