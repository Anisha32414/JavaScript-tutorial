console.log(Math.PI)
console.log(Math.ceil(4.8))
console.log(Math.sqrt(4))
console.log(Math.floor(4.9))
console.log(Math.min(4,5,2,8))
console.log(Math.max(4,6,1,9))
console.log(Math.abs(-36))
console.log(Math.round(45.89))

console.log(Math.random())               // print any random no. between 0 and 1

console.log(Math.floor((Math.random()*10)+1))          // this will genarate random no. b/w 1 to 10 with only floor value, +1 for avoiding 0


let min_num=10
let max_num=20
console.log(Math.floor((Math.random()*(max_num - min_num + 1))+ min_num)) 
//generate random number between 10 and 20 (min_num and max_num are used for range)
//+min_num is added to specify that we want atleast min_num->not adding this will generate random floor value only in diff og min and max ie.,10
