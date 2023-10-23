// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;
switch(month){
    case 1:
     console.log("january");
     break;
    case 2:
     console.log("feb");
     break;
    case 3:
     console.log("march");
     break;
    case 4:
     console.log("april");
     break;
     default:
        console.log("inavlid credentials");
}


let userEmail=[];
if(userEmail){
    console.log("true");
}else{
    console.log("false");
}
if(userEmail.length == 0){
    console.log("array is empty");
}
//falsy values;

//false,0,-0,"",BigINt 0n,NULL,Undefined,NAN

//truthy values;
//true,"0",'false'," ",[],{},function(){}

const emptyobj={};
if(Object.keys(emptyobj)){
    console.log("obj is empty");
}