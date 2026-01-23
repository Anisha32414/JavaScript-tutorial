//stack-premitive data types
//heap-non primitive data types



//STACK:-

let v="helloWorld"
let copy_v=v


copy_v="goodMorning"
console.log(v)
console.log(copy_v)                //there will be no change in v because copy_v is a copy of v they do not reference to same value



//HEAP:-

let obj1={
    name:"anisha",
    age:22,
    gender:"female",
}

let obj2=obj1

obj2.age=23

console.log(obj1.age)
console.log(obj2.age)             //here the change in obj2 will reflect on onj1 because both obj are pointing to same values
