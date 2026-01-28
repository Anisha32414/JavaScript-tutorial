const func=function(){           // function defination
    console.log("hello world")
}
func()                  //----> funtion call (A funtion will not execute unless it is called)

//--------------------------------------------------------------------------------------------------------------

// function to add two numbers

const sum=function(num1,num2){
    const sum=num1+num2
    return sum
}
const result=sum(2,3)
console.log("result is :- ",result)

/*

sum is a local variable in above sum() function.
It can not be accessed outside the scope of the function sum() 

variables defined outside the sum() function are global variable.---> result
They can be accessed everywhere in code.

*/

const global_var="i am global variable"

const random_func=function(){
    const local_var="i am local avriable"
    console.log("global variable inside local scope :- ",global_var)
    console.log("local variabla inside local scope :-",local_var)
}

random_func()

console.log("global variable outside local scope :- ",global_var)
//console.log("local variable outside local scope :- ",local_var)   //--> gives error as local_var not defined

//--------------------------------------------------------------------------------------------------------------

// function to print the area of rectangle:-

const area_rec=function(len,bre){
    const area=len*bre
    return area
}
const num1=10
const num2=20
const area=area_rec(num1,num2)
console.log("area of rectangle with length ",num1," and width ",num2," is :- ",area)


// function to print the area of circle:-

const area_cir=function(radius){
    const area=3.14 * radius *radius
    return area
}
const num3=7
const ar=area_cir(num3)
console.log("area of circle with radius ",num3," is :- ",ar)
