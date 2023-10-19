let pattern='pw';

let regexOne =new RegExp(pattern);

let flag='gi'
let regextwo=new RegExp(pattern,flag);

let regexthree= /pw/gi;


const STringTocheck="pw skill is growing at rapid speed to make a pw skill better pw skill";


const result=regexthree.test(STringTocheck)
console.log(result);

const anotherresult = STringTocheck.match(regexthree);
console.log(anotherresult);


const OneMOreREsult=STringTocheck.replace(regexthree,"p-w")
console.log(OneMOreREsult);

const weburl= "http://aditya@%29gmail.com";

const usableurl=weburl.replace(/%\d9/,'-')
console.log(usableurl);