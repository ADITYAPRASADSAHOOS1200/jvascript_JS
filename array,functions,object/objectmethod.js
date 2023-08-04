let emp={
    id:101,
    name:'adi',
    age:26

}


let keys=Object.keys(emp);
console.log(keys);

let values=Object.values(emp);
console.log(values);

let entries=Object.entries(emp);
console.log(entries);

// Object.freeze(emp);it will not add new keys and values in object
Object.seal(emp);
emp.address=123
console.log(emp)

let o=Object.assign({},emp);
console.log(o);

