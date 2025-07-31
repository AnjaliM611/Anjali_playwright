class parent{
    m1(){
         console.log("hi")
    }
}
class father extends parent{
    m2(){
        console.log("hello");
        
    }
}
class mother extends father{
    m3(){
        console.log("gm");
        
    }
}
const obj=new mother()
obj.m1()
obj.m2()
obj.m3()                