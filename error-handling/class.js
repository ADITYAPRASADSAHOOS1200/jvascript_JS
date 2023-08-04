
//basic str of class
class product{
// ///properties->variables->datamemeber
//    name;
//    price;
//    rating; 




   constructor (n,p,r){
    console.log("calling the constructor ");
    this.name=n;
    this.price=p;
    this.rating=r;
    //return 10:if you are returning primitive it will be avoide by the constructor

   }






   //behaviour->function->memeber function
   display(){
    console.log("this refers to",this)
    console.log("displaying the curent product ",this.name,this.price,this.rating)
    

   }
     
   }

   const p=new product("iphone",9000,5)//new->creates an empty plain obj
   //->in the above piece of code we are calling the constructor method
   console.log(p);
   p.display();

   console.log(p.name);

  //we can also this keyword outside the product


  
   