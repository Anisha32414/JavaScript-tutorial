let num=100
let num1=new Number(200)

console.log(num)
console.log(num1)

/*

functions in Number:-
-toString()
-toFixed(integer)                                  -> used for no. of didgit after decimal
-toPrecision(integer)                              -> used to round-of the number upto entered digits
-toLocaleString() or toLocaleString('en-US')       -> used to increase the readability of big number(US format) ie: 1000000 -> 1,000,000
-toLocaleString('en-IN')                           -> used to increase the readability of big number(Indian format) ie: 1000000 -> 10,00,000

*/

let dec_num=123.7638

let big_num=1000000

console.log(num.toString())
console.log(num.toString().length)
console.log(num.toFixed(2))
console.log(dec_num.toPrecision(4))
console.log(dec_num.toPrecision(3))
console.log(big_num.toLocaleString('en-US'))
console.log(big_num.toLocaleString('en-IN'))
