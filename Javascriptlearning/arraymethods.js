  //Array length

  arr=[1,2,'anju',4,5,6]
console.log(arr.length)

//type of array
   
console.log(typeof(arr[2]))
//sort array
arr1=[2,4,3,8,1,5,6]
arr2=arr1.sort();
console.log(arr2);


arr3=["hanuman","shiva","narayana","durrgamaatha"]
arr4=arr3.sort()
console.log(arr4)


arr5=[1,2,3,4,5,6,7,8,9]
arr6=arr5.reverse()
console.log(arr6)

//join
//convert the array to string
arr7=["anju","anu","anj"]
str=arr7.join("")
console.log(str)

//split
//split converts the string to array
str1="Javascript"
arr8=str1.split();
console.log(arr8)

str2="happy birthday anjali"
arr9=str2.split(" ")//("")
console.log(arr9)

str3="happy birthday anjali"
 revstr=str3.split("").reverse().join("");

  console.log(revstr.length)


  //push()         //add elements at the end
  arr10=["om","namah"]
 arr10.push("shivaya")
  console.log(arr10)

  //unshift()       //add elements from the beginning
  arr11=["namo","narayana"]
  arr11.unshift("om")
  console.log(arr11)
  
  //pop()    //remove the element at the end of the array

  arr12=["anjali","reddy","thilak","yamuna"]
  arr12.pop()
  //arr12.shift()
  console.log(arr12)

  //Shift()  // //remove the element begining of the array
  
   arr13=["anjali","reddy","thilak","yamuna"]
    arr13.shift()
  console.log(arr13)

  
  arr14=["anjali","reddy","thilak","yamuna"]
  arr14.pop()
  arr14.shift()
  console.log(arr14)

  arr14=["anjali","reddy","mamatha","thilak","yamuna"]
  arr14.pop()
  arr14.pop()
  arr14.shift()
  arr14.shift()
  console.log(arr14)
  
  
   arr14=["anjali","mamatha","MAhalingapa","reddy","thilak","yamuna"]
   for(let i=1;i<=arr14.length-1;i++)
  arr14.pop()
   arr14.shift()
   //arr14.shift()
  console.log(arr14)

  //includes()
  arr15=["music","direction","acting","production"]
    arr16=arr15.includes("music")
  console.log(arr16)

  arr15=["music","direction","acting","production"]
  if(arr15.includes("music")){
    console.log("hi Anjali")
  }
  else{
    console.log("bye Anjali")
  }
    
  arr15=["music","direction","acting","production"]
  if(arr15.includes("dancing")){
    console.log("hi Anjali")
  }
  else{
    console.log("bye Anjali")
  }
    
//slice()
arr16=["music","direction","acting","production"]
  
  arr17=arr16.slice(1,4)
  console.log(arr17)
  
  //splice()
  
  arr16=["music","direction","acting","production"]
  
  arr17=arr16.splice(1,2)
  console.log(arr17)
  
  //map()
// const value=[1,2,3,4,5]                  

//  const arrvalue=value.map(n=>n*2)                 //map transforms each element of the array and return new array(without changing an array return new array)
//  console.log(arrvalue)


// //filter()
//  arr1=value.filter(n=>n%2==0)                   // filter selects the elements based on condition and returns new array
//  console.log (arr1);                               
//  //reduce                                       
//  const arr2=value.reduce((acc,num)=>acc+num);      // reduce is used to reduce the array
//   console.log(arr2)                                //acc means accumulator(it keeps adding values ) // num is current numberfrom the array 
                                                
  //foreach()                                                    
arr=["cat","dog","rat","ant","owl"]
 arr.forEach(element=>{
    console.log("loop starts")
    console.log(element)
    console.log("loop ends")
})

//forof()
arr=["cat","dog","rat","ant","owl"]
for(let element of arr){
    console.log("loop starts")
    console.log(element)
    console.log("loop ends")
}