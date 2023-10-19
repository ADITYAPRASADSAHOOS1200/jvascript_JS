const name="aditya";
const repocount=50;

console.log(`MY ${name} and my repocount is ${repocount}`);//string interpolation

const gameName=new String ('ad-it-ya');
console.log(gameName);


console.log(gameName[0]);//position

console.log(gameName.__proto__);//prototype
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));//check the position of 
console.log(gameName.indexOf('y'));//index of cahracter

const newString=gameName.substring(0,4);//substring
console.log(newString);

console.log(gameName.slice(3,6));

const newstr="  aditya  "
console.log(newstr);
console.log(newstr.trim());


const url="http://localhost:aditya"

console.log(url.replace('adi','%56'));
console.log(url.includes('aditya'));
console.log(gameName.split('-'));

