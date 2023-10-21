//Multiple condition

const balance=1600;

if(balance < 500){
    console.log("less than 500");
} else if(balance <750){
    console.log("less than 750");
}else if(balance <900){
    console.log("less than 900");
}else if(balance  == 1000){
    console.log("its equal to 1000");
}else{
    console.log("neither less or equal to 1000");
}




const userloggedIn=true;
const debitcard=true,
loggedinFROMGoogle=false,
loggedinFromemail=true;

if(userloggedIn&& debitcard){
    console.log("allow to buy courses");
}

if(loggedinFROMGoogle ||loggedinFromemail){
    console.log("loged in");
}