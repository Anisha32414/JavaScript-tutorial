const arr1=["hello","world"]
const arr2=["good","morning"]
console.log(arr1.concat(arr2))

arr1.push(arr2)                         // push() append complete array into array
console.log(arr1)

const arr=arr1.concat(arr2)             // concat() append all element into array
console.log(arr)


const another=[...arr1,...arr2]            //spreading of array
console.log(another)

const dummy=[3,6,[4,0],1,[9,[8,7,[2,[5]]]]]        
console.log(dummy.flat(Infinity))            
// flat() will simply give all elements of the array avoiding nested array upto mentioned depth 
// -> use "Infinity" if you want to flat entire array without certain depth


//--------------------------------------------------------------------------------------------------------------


console.log(Array.isArray("hello!!"))       // print true/false parameter is array or not
console.log(Array.isArray(arr))

console.log(Array.from("GoodMorning"))      // convert to array from entered parameter only if convertable
console.log(Array.from({name:"xyz",class:"IT"}))   
// in above statement object is not convertable to array so it will return empty object 
// if you want to make array from a object so you have to mention either key OR value to form Array

//-------------------------------------------------------------------------------------------------------------

let num1=1
let num2=2
let num3=3
console.log(Array.of(num1,num2,num3))    // Array.of() is used to form an array using input parameter
