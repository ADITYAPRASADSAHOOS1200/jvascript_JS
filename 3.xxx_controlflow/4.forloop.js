
let array=[2,3,4,5566,789,9990,0,8,9,7,5]
// for (let i = 0; i < 20; i++) {
//     const element = i;
//     console.log(element);
// }
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
}

for (let i = 4; i < 5; i++) {
    const element=i;
     console.log(`outer:${element}`);
for (let  j= 0;  j<=10; j++) {
    //   const element=i;
    //   console.log(`inner:${element}`);
    //   console.log(i);
    console.log(i+'*'+j+'='+ i*j);
}

}

//break and continue

for (let i = 0; i < 10; i++) {
    if(i == 4){
       console.log("detected 4");
      continue;
    }
    
    console.log(`The value of i is ${i} `);
    }
    
    
    let index=0;
    while (index<=10) {
        console.log("while loop");
    console.log(`Value of index is ${index}`);
    index=index+2;
    }


    let score=1
    do {
        console.log("score",score);
        score++;
    } while (score<10);

    