// While loop

let var1=0
while(var1<=10){
    console.log("current value of var1 is ",var1)
    var1=var1+2
}


console.log("\n")

let arr=["string1","string2","string3","string4"]
let index=0;
while(index<arr.length){
    console.log("element at index ",index," is ",arr[index])
    index++;
}


// Do-While loop

console.log("\n")
let i=0
do{
    console.log("val of i is",i)
    i++
}while(i<=5);


// binary search using while loop in JS
console.log("\n")
const random=[2,3,5,8,9,12,15,20,23,26,27,30]
let low=0
let high=random.length-1
const search_element=9

while(low<=high){
    let middle=Math.floor(low+(high-low)/2)
    if(random[middle]==search_element){
        console.log("search_element" ,search_element,"found at index ",middle," in random array",random," using binary search")
        break
    }
    else if(random[middle]<search_element){
        low=middle+1
    }
    else{
        high=middle-1
    }
}


//Linear search using while loop
console.log("\n")
let arr1=[2,1,4,7,5,9,10,8]
const element=10
let j=0
while(j<arr1.length){
    if(arr1[j]==element){
        console.log("element",element," found at index ",j," in arr1 ",arr1," using linear search")
        break
    }
    j++
}
