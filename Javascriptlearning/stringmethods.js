//length()
// str='anju'
// console.log(str.length)
//index()

// str='anju'
// console.log(str[2])

str='anju'
console.log(str.charAt(0))



//concat()
str1="anjali"
str2="m"
str3=str1.concat(" "+str2)
console.log(str3)

str= "anju"+"anjali"
console.log(str)

//trim()
str="    anjali    "
console.log(str.trim().length)

//uppercase()
str="anjalimamatha"
str1=str.toUpperCase()
console.log(str1)

//lowercase()

str="ANJALIMAMATHA"
str1=str.toLowerCase()
console.log(str1)

//substring()
str="anjalimamatha"
str1=str.substring(0,3)
console.log(str1)

//substr
str="anjalimamatha"
str1=str.substr(0,4)
console.log(str1)


// (\t)
str= "anju\tanjali"
console.log(str)       //it gives space
     
//(\n)

str= "anju\nanjali"
console.log(str)      //it going to nextline

//includes()
str= "anju\nanjali"
console.log(str.includes("anju"))

//$

str2="my fab book"
str1=`love without you anymore-${str2}`  //it will work with backticks only
console.log(str1)  

str2="my fab book"
str3="girl"
str1=`love without ${str3} you nothing-${str2}`  //it will work with backticks only
console.log(str1) 

//arrays are mutable

arr=["anju","anjali"]
arr[0]="m"
console.log(arr) 

//strings are immutable

str="sunami"
str[0]="t"
console.log(str) //no error will give console

//replace()
a=Number("$1".replace("$",""))
b=Number("$3".replace("$",""))
c=a+b
console.log(c)
//replaceAll
 str = "I love cats.Cats are cute.";
console.log(str.replaceAll("cats", "Dogs")); // I love dogs. cats are cute.

//slice
str="anjali"           //(start,end )-extract part of string
console.log(str.slice(0,4))

 str1 = "Hello world";
console.log(str1.indexOf("o"));       // 4
console.log(str1.lastIndexOf("o"));   // 7
console.log(str1.startsWith("Hel"));  // true
console.log(str1.endsWith("ld"));     // true