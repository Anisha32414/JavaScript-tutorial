/* 
Falsy values:
"" , 0 , -0 , BigInt 0n , false , NaN , null , undefined

Truthy values:
"0" , " " , "false" , [] , {} , function(){}
*/

const arr=[]
if(arr){                                          // empty arr make condition true --> shows array have elements
    console.log("array contain some elements...")
}
else{
    console.log("array is  empty...")
}


// for checking array have elements or not:
const arr1=[]
if(arr.length === 0){
    console.log("array have no elements")
}
else{
    console.log("array have some elements")
}

// similarly this problem is also observed in objects. Its solution is :-

const myObj={}
if(myObj){                                  // myObj gives true value as condition --> same issue seen in array
    console.log("myObj is not empty")
}
else{
    console.log("myObj is empty")
}


const obj={}
if(Object.keys(obj).length === 0){
    console.log("obj is empty...")
}
else{
    console.log("obj is not empty...")
}


//some basic concepts...

console.log("false==0 : ",false==0)
console.log("''==0 : ",''==0)
console.log("false=='' : ",false=='')

//nullish coalescing operator (??) --> work with null/undefined

let variable;
variable=3 ?? 4
console.log("3 ?? 4 :- ",variable)
variable=null ?? 6
console.log("null ?? 6 :- ",variable)
variable=undefined ?? 10 ?? 20
console.log("undefined ?? 10 ?? 20 :- ",variable)
variable=15 ?? null
console.log("15 ?? null :- ",variable)


// Ternary operator
// syntax ---> (expression) ? (if true statement) : (if false statement)

const val=30>50 ? true : false
console.log(" val :- ",val)

const age=21
age>18 ? console.log("age is above 18") : console.log("age is less than 18")
