 /*emp  =  {                           // creating object

          firstname:"anjali",
          employeid:"43265",
           place :"blr",
           exp:"5 years"
         }
  console.log(emp.firstname)
   console.log(emp.employeid)
    console.log(emp.place) 
    console.log(emp['exp'])       //another method to access object
    emp.place ="chennai"       
 console.log(emp.place)           //replacing property 
 console.log(emp.designation)     //adding new propertyname
 console.log(delete emp['exp'])            //for use deleting
  console.log(delete emp.place) */
 
 
  /*str1="jai hanuman"
  str2="om namo narayana"
  str3=`${str1} and ${str2}`        //backtick should must
  console.log(str3)                 //another method of adding strings

   menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 :"Leave"
}

//for in 

for(let item in menuitems){

    console.log("loop starts ")
    console.log(menuitems[item])
    console.log("loop Ends ")
}*/


god={
      peace:"shiva",
      success:"hanuman",
      strength:"krishna"
}
for(let devotee in god){
  //console.log("om namah shivaya")
    //console.log(god['success'])         ////("jai hanuman")
    console.log(god[devotee])                 //another method to access object here we get 3 values without printing
//console.log("om namo narayana")
}