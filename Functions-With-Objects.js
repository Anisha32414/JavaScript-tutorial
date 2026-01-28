const sum_of_numbers=function(num1){              // this will only take the first parameter and avoid rest
    return num1
}

const result=sum_of_numbers(100,200,300)
console.log("result is :- ",result)               


// for avoiding problem we faced above we do :-

const sum_of_number=function(...num1){    // doing this will take all the parameters passed during function call
    return num1
}

const answer=sum_of_number(100,200,300)
console.log("result is :- ",answer)      //all numbers passed in an array

//----------------------------------------------------------------------------------------------------------------
// another way of defining a function 

function function_name(){
    return "function executed!!"
}
const res=function_name()
console.log("result of another method of defining a function :- ",res)

//---------------------------------------------------------------------------------------------------------------
//accessing an Object data inside function()

const my_obj={
    name:"anisha",
    email:"xyz123@gmail.com",
    location:"delhi",
    course:"JS-tutorial"
}

function access_myObj(obj){
    return `my_obj data found :- 
    name - ${obj.name} ,
    email - ${obj.email} ,
    location - ${obj.location} , 
    course - ${obj.course}`;
}

const output=access_myObj(my_obj)
console.log(output)
