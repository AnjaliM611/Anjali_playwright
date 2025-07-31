/*class animal{
    lion(){
        console.log("hi")
    }
}
class vehicle extends animal{           //same methods name nut different behaviour
    lion(){
        console.log("hello");
        
    }
   
     
}

const a=new vehicle();
a.lion()*/


/*class animal{
    lion(a,b){
        console.log(a,b)
    }
}
class vehicle extends animal{           //same methods name but different behaviour
    lion(c,d){
        console.log(c+d);
        
    }
   
     
}

const a=new vehicle();
a.lion(1,2)
a.lion(2,5)*/

class A{
 printHiMessage() {

        console.log("Hey HI")
    }

    add(num1, num2) {

        console.log(num1)
        console.log(num2)
        console.log(num1 + num2)

    }

}

class B extends A{

    printHiMessage() {

        console.log("Hey hello")
    }

    add(num1, num2, num3) {

        console.log(num1)
        console.log(num2)
         console.log(num3)
        console.log(num1 + num2 + num3)

    }

}

const obj = new B()

obj.printHiMessage() // Method Overriding 

obj.add(1,2,4) // method Overloading 




