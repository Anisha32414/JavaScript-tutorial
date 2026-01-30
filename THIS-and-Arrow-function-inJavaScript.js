const obj={
    name:"anisha",
    age:21,
    branch:"AI",
    message:function(){
        console.log(`Welcome ${this.name} in this JS-Tutorial of branch ${this.branch}...`)
        console.log(this)        //---> here THIS will print the current-context
    }
}

obj.message()
obj.branch="ML"                 // here we change the context from AI to ML
obj.message()
console.log(this)               //---> here THIS will print {}

//------------------------------------------------------------------------------------------------------------

const func1=function(){
    const nmae="xyz"
    console.log(this.name)      // print "undefined" ---> THIS do not work same in FUNCTION
    console.log(this)           // print all global values
}
func1()
//------------------------------------------------------------------------------------------------------------

function func2(){
    const nmae="xyz"
    console.log(this.name)      // print "undefined" ---> THIS do not work same in FUNCTION
    console.log(this)           // print all global values
}
func2()
//------------------------------------------------------------------------------------------------------------

const func3=() => {
    const nmae="xyz"
    console.log(this.name)      // print "undefined" ---> THIS do not work same in FUNCTION
    console.log(this)           // print {}
}
func3()


//************************************************************************************************************

// implicit and explicit way of using arrow function:-

//1-explicit   --->  in this we have to use {} and return keyword

const sum_func1=(num1,num2) => {
    return num1+num2
}
const ans1=sum_func1(2,3)
console.log(ans1)

//2-implicit    --->  in this we do not use any return keyword and {} (output remains same)

const sum_func2=(num1,num2) => (num1+num2)

console.log(sum_func2(2,3))

/*

#print object using arrow function...

const arrow_func=() => ({ name: "anisha",branch:"AI"})
console.log(arrow_func())

---> object should be indide () otherwise it print "undefined"

*/
