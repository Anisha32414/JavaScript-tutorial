const sys=Symbol("type1")                      // defining a symbol

const user={                                 // All the keys in the object are Strings
    name:"xyz",
    age:21,
    dept:"IT",
    [sys]:"type1",       // A symbol inside object is defined with specific format otherwise -> treated as string
    "user email":"xyz@gmail.com",
    location:"noida",
    logged_in:["monday","friday","wednesday"],
}

console.log(user)

console.log(user.name)         //accessing key from object this method is used generally
console.log(user["name"])      // another method 

console.log(user["user email"])      // ---> give output
//console.log(user.user email)         // this will give error

//-----------------------------------------------------------------------------------------------------------------


user["user email"]="abc@gmail.com"
console.log(user["user email"])          //email updated
Object.freeze(user)         //------> here complete user object will be freezed no updation after this statement
user["user email"]="pqr@gmail.com"    //--->this updation will not cause error but it will not update email as well
console.log(user)
