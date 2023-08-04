
class product{


    //private data member
    #rating; 
  constructor (n,p,r){
      console.log("calling the constructor ");
      this.name=n;
      this.price=p;
      this.#rating=r;
      //return 10:if you are returning primitive it will be avoide by the constructor
       
     }
  
   static custom(){
       console.log("calling a static")
   }
  
    get Ratinggetter(){
        console.log(this.#rating);
    }
    set Ratingsetter(r){
        if( r< 0) return;
         this.#rating=r;
    }
   
  
  
  
  
     //behaviour->function->memeber function
     display(){
      
      console.log("displaying the curent product ",this.name,this.price,this.#rating)
      
  
     }
       
     }
  
     const p=new product("iphone",9000,5)//new->creates an empty plain obj
     //->in the above piece of code we are calling the constructor method
     console.log(p);
     p.Ratingsetter=20;
     p.Ratinggetter;

     