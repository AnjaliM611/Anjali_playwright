/*setTimeout( ()=>{
console.log("hi")
},6000)
console.log("Anjali")*/


//higher order function


/*function greet(callback){
   callback();
    console.log("hi")
}                                     //here this line printing last that is callback function

function wish(){
    console.log("anjali");
    
}
greet(wish)        //passing wish as a callback




/funtion() {
console.log("hi")      //function without name is ananymous
}

()=>{
console.log("hi");         //function without name is ananymous

}*/

/*function Anjali(){
    add()
    console.log("anjali")

}
function add(){
    console.log("hi")
}
Anjali()*/



/*function Anjali(a,b){
    add()
    console.log(a,b)

}
function add(){
    console.log("hi")
}
Anjali(1,2)*/


function Anjali(callback){
 
      callback();
     console.log("hanuman")

}
function add(){
   
    console.log("hi")

}

function  m1(){
       //add()
console.log("namsthe");

}
Anjali(add)  //giving the function as argument dont give the brackets