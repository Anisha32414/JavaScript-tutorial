let str="helloWorld"
let anotherStr=new String("goodMorning")         //another way to define string

console.log(anotherStr)

let url="hello-world-to-friends@yahoo.org"
/* there are so many funstion one can perform on strings such as :

-length
-toLowerCase()
-toUpperCase()
-charAt(index)
-indexOf(character)
-trim()
-replace()
-includes()
-split()
-substring()
-slice()

*/

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(anotherStr.indexOf('r'))
console.log(anotherStr.charAt(3))
console.log(str.substring(0,4)) 
console.log(anotherStr.slice(2,5))                          
console.log(anotherStr.replace("rni","30"))                  // replaces rni in anotherStr to 30
console.log(anotherStr.includes("key"))                      //checks wether "key" exist in anotherStr or not
console.log(url.split("-"))                                  // used to divide the string when "-" encountered