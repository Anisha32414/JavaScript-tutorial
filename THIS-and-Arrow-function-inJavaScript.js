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
