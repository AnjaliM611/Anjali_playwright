/*class college{
    constructor(sname,sid){
     console.log(sname,sid);
        
    }
}
  const obj=new college("Anjali","123")*/


/*class emp{
    constructor(sname,sid){
      this.sname=sname
      this.sid=sid
}
   details(){
      console.log(this.sname,this.sid);
      
      
   }
}
const obj=new emp("ram","123") 

    obj.details()*/



class emp {
    constructor(sname, sid) {
        this.sname = sname
        this.sid = sid
    }
    details() {
        console.log("name:" + this.sname);
        console.log("id:" + this.sid);


    }
}
const obj = new emp("hanuman", "6")
const obj1 = new emp("krishna", "123")

obj.details()
obj1.details()


