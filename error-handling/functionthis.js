function Product(n,p,r){
    this.name=n;
    this.price=p;
    this.rating=r;
    
    
   }
  
   const p=new Product("macbook",150000,5);
   console.log(p);
  
   let z = {
    p:Product
   };
  
   z.p("airpods",2000,5);
   console.log(z);
  
  
  
  
  
   /*1.this keyword in js different than other languages
    * 2.this keyword refers to context from where we called
    *
    * 
    * in this function constructor also
    * -if you return primitive it is ignored and we return the object reffered by this
    * -if you return a custom obj,then the custom obj is returned
    */

//using in annonymous function
   const product = function (n,p,r) {
    this.name=n;
    this.price=p;
    this.rating=r;
    
    
   }

   const e=new product("yphone",7000,4)
   console.log(e);

   const prod=(n,p,r)=>{
    this.name=n;
    this.price=p;
    this.rating=r;
    
   }
 //  const x=new prod("sphone",300,4);
//    console.log(p);
//tn arrow function calling context of point is not applicable for the arrow function




   let obj={
    x:10,
    fun() {
        console.log(this.x)
     }
   }
   console.log(obj)