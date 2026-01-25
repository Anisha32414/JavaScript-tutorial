let arr=['a','b','c','d','e']
console.log(arr.length)
console.log(arr[1])
for(let i=0;i<arr.length;i++){
    console.log(arr[i])
}
if(arr[3]=='a'){
    console.log("element found at in dex 3")
}
else{
    arr.push('f')
    console.log("element a is not found at index at 3 !!")
    console.log(arr[arr.length-1])
}
