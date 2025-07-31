//class Anjali{
//        constructor (){
//     console.log("hi")     
//     }
//    }
//  const obj=new Anjali()        //for using constructor without creating object(reference variable).method we should call methods
//  const obj1=new Anjali()
//  const obj2=new Anjali()
 
 class mobile{
    constructor(name ,storage){
       console.log(name ,storage)
    }
    add(name ,storage){
       console.log(name ,storage)       //we should give same arguments in methods and console also
    }
    function(name ,storage){
       console.log("happy launching"+name ,storage)  
    }
   


 }

 const automobile=new mobile("realme12+","8gb")
 const automobile1=new mobile("redminote7","8gb")
 const automobile2=new mobile("oppo","8gb")
 