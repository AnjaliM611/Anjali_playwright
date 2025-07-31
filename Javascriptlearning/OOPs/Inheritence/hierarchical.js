class vehicle{
    bike(){
        console.log("passion pro");          // one parent class multiple child class
        
    }
}
class animal extends vehicle{
    bird(){
        console.log("parrot");
        
    }
}
class makeup extends vehicle{
    lipstick(){
        console.log("maybelline");
        
    }
}
const obj=new makeup()
const obj1=new animal()
obj.lipstick()
obj1.bird()