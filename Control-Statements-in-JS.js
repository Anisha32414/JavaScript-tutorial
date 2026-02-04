/* control statements :-

---> (if)
---> (if)-(else)
---> (if)-(else-if)
---> (if)-(else-if)-(else)
---> (switch)-(case)

*/

// (if)
const temp=30
if(temp>15 && temp<35){
    console.log("temp value is between 15 and 35 which is :- ",temp)
}


const age=20
if(age>=18){
    console.log("candidate can vote because their age is :- ",age)
}

//------------------------------------------------------------------------------------------------------
// (if)-(else)
const day1="monday"
const day2="sunday"

if(day1=="monday" || day2=="tuesday"){
    console.log("either day1 is monday or day2 is tuesday")
}
else{
    console.log("neither day1 is monday nor day2 is tuesday")
}



const colour="blue"
const num="2112"

if(colour==="blue"){
    console.log("colour is blue")
}
if(num===2112){
    console.log("code is Number(2112)")
}
else{
    console.log("code is not Number(2112) it's ",num," ,with data type :-",typeof(num))
}


//------------------------------------------------------------------------------------------------------
//(if)-(else-if)

const person_age=37

if(person_age<18){
    console.log("person age is less than 18")
}
else if(person_age==18){
    console.log("person age is equal to 18")
}
else if(person_age>18 && person_age<=30){
    console.log("person age is greater than 18 and less than or equal to 30")
}
else if(person_age>30 && person_age<=50){
    console.log("person age is greater than 30 and less than or equal to 50")
}
else if(person_age>50){
    console.log("person age is above 50")
}



//------------------------------------------------------------------------------------------------------
//(if)-(else-if)-(else)

const balance_in_account=750
const accouont_type="shared"

if(balance_in_account == 0){
    console.log("account balance is 0")
}
else if(balance_in_account<=500 && accouont_type=="FD"){
    console.log("account balance is greater than equal to 500 and account is FD type")
}
else if(balance_in_account<=500 || accouont_type=="FD"){
    console.log("account balance is greater than equal to 500 or account is FD")
}
else if(balance_in_account<=1000 && accouont_type=="shared"){
    console.log("account balance is greater than equal to 1000 and account is shared type")
}
else{
    console.log("account balance is greater than 1000")
}


//------------------------------------------------------------------------------------------------------
//(switch)-(case)

const month=3
switch(month){
    case 1:
        console.log("monthe is jan!!")
        break
    case 2:
        console.log("monthe is feb!!")
        break
    case 3:
        console.log("monthe is march!!")
        break
    case 4:
        console.log("monthe is april!!")
        break
    case 5:
        console.log("monthe is may!!")
        break
    default:
        console.log("month is above 5 ! !")
        break
}



const exp=2*2+1
switch(exp){
    case 1:
        console.log("exp val is 1")
        break
    case 2:
        console.log("exp val is 2")
        break
    case 3:
        console.log("exp val is 3")
        break
    case 4:
        console.log("exp val is 4")
        break
    default:
        console.log("exp value is greater than 4!!")
        break
}
