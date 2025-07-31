/*class Empname{
    static anjali(){
        console.log("software testegineer")         // without creating object calling methods and variables
    }
    jamuna(){
       console.log("QA testegineer") 
    }
}
Empname.anjali()
Empname.jamuna()*/


class emp{
          y=20;                         //non static variable
   static x=10;                        // using static keyword with variable
   static m1(a){                      // using static keyword with methods
    console.log("Enternumber:"+a);
        
    }
    m2(b){                             //non static method
        console.log("hi"+b);
        
    }

}
emp.m1(2)
emp.m2(6)
console.log(emp.x);
console.log(emp.y);                //undefined non ststic var

// for error  give static 