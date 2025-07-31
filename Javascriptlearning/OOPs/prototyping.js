/*class anjali{
    m1(){
        console.log("hi anjali");
        
    }
    
    
}
anjali.prototype.m2 =function(){            //In ES6 classes, all methods inside the class body automatically go to the prototype, so if you want to add something dynamically, you must do it after the class is defined.
        console.log("good mrng")
        
    }

anjali.prototype.stname="hanuman"
const obj=new anjali()
obj.m2()
console.log(obj.stname)*/


Object.prototype.print = function () {
    console.log('I am from object prototype')
}
let b = {
    name: 'Pranjal',
    age: 21
}
b.print()