/*-----------------------IIFE - immediately invoked function expression --------------------------*/
// used for immediate creation of DB and to avoid global variable pollution.

//syntax :- ()()    ----->   (__function-defination__)(__execution__)

(function hello(){
    console.log("Hello friends!!")
})();

// this print hello friends!! without calling function name because 2nd () is for execution 
// it will automatically execute the function

// but we require a ; after 2nd () to show the terminating point 
// otherwise error occur when we write another function using IIFE

(() => {
    console.log("welcome new users...")
})();


// passing argument...

((name) => {
    console.log(`learning JS together with ${name}`)
})("user-1");
