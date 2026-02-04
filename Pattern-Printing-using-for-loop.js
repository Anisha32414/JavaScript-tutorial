/* Loops:
-for()
-while()
-do{}-while()
*/

let i
for(i=0;i<5;i++){
    console.log("val of i is :",i)
}
console.log("at last val of i after loop is : ",i)



for(let index=0;index<10;index++){
    if(index==5){
        console.log(" number 5 detected !!")
        break
    }
    console.log("index is : ",index)
}


for(let x=0;x<2;x++){
    for(let y=0;y<2;y++){
        console.log(`outer loop x is ${x} and inner loop y is ${y}`)
    }
}


//pattern printing:-  
//1.

console.log("\n")
for(let i=0;i<5;i++){
    let row=""
    for(let j=0;j<5;j++){
        if(j<=i){
            row+="* "
        }
    }
    console.log(row)
}


//2.
console.log("\n")

for(let i=0;i<5;i++){
    let row=""
    for(let j=0;j<5;j++){
        if(j>=i){
            row+="* "
        }
    }
    console.log(row)
}


//3.
console.log("\n")

for(let i=0;i<5;i++){
    let row=""
    for(let j=0;j<5;j++){
        if(j>=i){
            row+="* "
        }
        else{
            row+="  "
        }
    }
    console.log(row)
}


//4.
console.log("\n")

for(let i=0;i<5;i++){
    let row=""
    for(let j=0;j<5;j++){
        if(j>=5-i-1){
            row+="* "
        }
        else{
            row+="  "
        }
    }
    console.log(row)
}
