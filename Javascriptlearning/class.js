class Anjali{
      x=30;
      y=60
     add(a,b){
     console.log(a+b)   
    }
    substract(a,b){
     console.log(a-b)   
    }
    mul(a,b){
     console.log(a*b)   
    }
    cal(a,b){
     console.log("name is:",a+" "+b)   
    }
    }                          //here need to close the braces before calling obj
    const obj=new Anjali()     //outside of the class should create obj

    obj.add(3,2)
    obj.substract(7,3)
    obj.mul(2,4)
    obj.cal("Anjali","M")    //  gives names with strings only
      obj.add()              //NaN we should give parameters(values)      
 
  //how to call variables
      console.log(obj.x)
     console.log(obj.y)
   
