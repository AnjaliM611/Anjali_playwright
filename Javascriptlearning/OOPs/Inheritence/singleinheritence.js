/*class parent{
    greet(){
        console.log("hi")
    }
}
class child extends parent{
   wish(){
        console.log("hello");
        
    }
}
const obj=new child()       //child class inherits from parent class
obj.greet()
obj.wish()*/



class animal{
    lion(){
        console.log("hi")
    }
}
class vehicle extends animal{
    car(num1,num2){
        console.log(num1,num2);
        
    }
     
}

const a=new vehicle();
a.lion()
a.car(1,2)