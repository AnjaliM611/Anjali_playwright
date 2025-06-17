 emp  =  {                           // creating object

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
  console.log(delete emp.place) 