let a=10
a++
console.log(a)
++a
console.log(a)
console.log(++a)
console.log(a)
console.log(a++)
console.log(++a)
console.log(a)

//in  a++ value of a remain same during a++ , value will increment after a++
// in console.log(a++) if value of a was 10 so during this statement value of a++ will be same as a i.e. 10 
//after this if you print a it will be incremented as the value of a is incremented after the execution of statement not during the exection.
//but in ++a incrementation will be done during the execution is a is 10 so ++a during and after ++a will be 11