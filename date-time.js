let myDate = new Date()
console.log(myDate)                 // date-time (less readable)
console.log(myDate.toString())        
console.log(myDate.getDate())               //print only date
console.log(myDate.getMonth())              //numbering of month start with 0 ,we can +1 to change numbering from 1
console.log(myDate.toLocaleString())        //makes date-time more readable
console.log(myDate.toISOString())           //ISO format date-time
console.log(myDate.toLocaleDateString())    //only print date in more readable format
console.log(myDate.toLocaleTimeString())    //only print time in more readable format

//--------------------------------------------------------------------------------------------------------------------
console.log("\n")

console.log(typeof myDate)
console.log(myDate.toTimeString())          // print only time in string data type 
console.log(typeof(myDate.toTimeString()))  // -> typeof above statement

//--------------------------------------------------------------------------------------------------------------------
console.log("\n")

console.log(myDate.getMilliseconds())        // print no. of miliseconds
console.log(myDate.getHours())               // print current hour
console.log(myDate.getMinutes())             // print current minutes
console.log(myDate.getSeconds())             // print current seconds  
console.log(myDate.getMonth()+1)             // print current motnh of the year(start from 1) -> (1)
console.log(myDate.getFullYear())            // print current year -> (2026)

//--------------------------------------------------------------------------------------------------------------------
console.log("\n")

let newDate=new Date(2026,7,14,22,30,3)      // this will create new date-time from the input data
console.log(newDate.toLocaleString())

let x=new Date(2026,0,4)
console.log(x.toLocaleString())

let y=new Date('2026-07-24')
console.log(y.toLocaleString())

let z=new Date('08-14-2026')
console.log(z.toLocaleString())

console.log(`${z.getDate()} is the date , ${z.getMonth()+1} is the month , ${z.getFullYear()} is the year in date ${z.toLocaleString()}`)

//--------------------------------------------------------------------------------------------------------------------
console.log('\n')

let nowDate=Date.now()
console.log(nowDate)
console.log(Math.floor(nowDate/1000))
