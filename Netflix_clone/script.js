const inputBox=document.querySelector(".inputField input");
const addbtn=document.querySelector(".inputField button");
const todo=document.querySelector(".to-dolist");
const pendingnum=document.querySelector(".pendingnum");
const deleteALL=document.querySelector(".footer button");


inputBox.onkeyup = ()=>{
    let userData=inputBox.value;//getting user  entered value;
    if(userData.trim() != 0){//if user value are not only spaces;
      addbtn.classList.add("active")//active the add button
    }else{
      addbtn.classList.remove("active")//unactive the add button;
    }
}
showtasks();

//if user click ont he button

addbtn.onclick = ()=>{
    let userData=inputBox.value;//getting user  entered value;
    let getlocalStorage=localStorage.getItem("New todo");// getting localstorage
     if(getlocalStorage == null){//if localstorage is null
        listArr=[]; //creating a blank array 
     }
     else{
        listArr=JSON.parse(getlocalStorage);//transforming json string into a js object
     }

     
     listArr.push(userData);//pushing or adding user data
     localStorage.setItem("New todo",JSON.stringify(listArr))//transforming a object into a string
  
     showtasks();//calling shoewtasks functions;
    
    }




function showtasks(){
  
    let getlocalStorage=localStorage.getItem("New todo");// getting localstorage
     if(getlocalStorage == null){//if localstorage is null
        listArr=[]; //creating a blank array 
     }
     else{
        listArr=JSON.parse(getlocalStorage);//transforming json string into a js object
     }
     pendingnum.textContent=listArr.length;//passing the arr value in pending num
  
     
     let newliTag='';
     listArr.forEach((element,index)=>{
        newliTag+=`<li>${element}<span onclick="deletetask(${index})";><i class="fas fa-trash"></i></span></li>`;
      })
     todo.innerHTML=newliTag ;//adding newli tag inside ul tag;
     inputBox.value="";//once the task complete leave the input field;
}

//delete task function

function deletetask(index){
  let getlocalStorage=localStorage.getItem("New todo");
  listArr =JSON.parse(getlocalStorage);
  listArr.splice(index,1);//delete or remove particular index li
  //after remove the li again update the localstorage
  localStorage.setItem("New todo",JSON.stringify(listArr))//transforming a object into a string
   showtasks();//calling the tasks function;
   
}


//delete all task function
 deleteALL.onclick=()=>{
    listArr=[];//emptyan array
    //after delete all task again update the local storge
    localStorage.setItem("New todo",JSON.stringify(listArr))//transforming a object into a string
    showtasks();//calling the tasks function;
 }