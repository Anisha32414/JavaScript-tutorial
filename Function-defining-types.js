// by defining function this way allow calling it after and even before it is defined
    
console.log(addTwo(3,6))                          

function addTwo(num1,num2){
    const sum=num1+num2
    return sum
}

console.log(addTwo(5,5))

// by defining function this way allow only calling it after it is defined

//console.log(sum(3,1))    --->  doing this will give an error, in this format of function writing

const sum=function(num1,num2){
    const sum=num1+num2
    return sum
}
const result=sum(2,3)
console.log("result is :- ",result)
