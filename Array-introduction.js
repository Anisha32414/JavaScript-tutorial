const arr=[2,3,6,5,7]
arr.push(1)
console.log("arr.push(1) :- ",arr)           // push at last in the array

console.log("arr.pop() :- ",arr.pop())       // print last element that is popped out from array

console.log("arr.length :- ",arr.length)          // length of arr

arr.unshift(4)                                    // add element at starting -> shift all elements toward right
console.log("arr after arr.unshift(4) :-",arr)    // but not useful for huge dataset

arr.shift()
console.log("arr after arr.shift() :- ",arr)      // remove the element at index 0 OR shift elements toward left

console.log("element at index 0 :- ",arr[0])
console.log("element at index 1 :- ",arr[1])
console.log("element at index 2 :- ",arr[2])
console.log("element at index 3 :- ",arr[3])
console.log("element at index 4 :- ",arr[4])

const dummy=arr.join(" ")               //add all elements of the array in a string with a separator(default-',')
console.log(dummy)
console.log(typeof dummy)               //type - string

console.log(arr.indexOf(10))            // print index of element, if not found -> -1

console.log(arr.includes(8))            // print true/false if element found in arr

console.log(arr.reverse())              // reverse the array

console.log(arr.sort())                 // sort the array in ascending order

const a=[2,3,4]
console.log(arr.concat(a))              // concat another array with arr
console.log(typeof(arr.concat(a)))      // type - object

//-------------------------------------------------------------------------------------------------------------------

console.log(arr.slice(1,3))             // print slice of array within range (start,end) -> excluding end
console.log("arr after slice() operation :- ",arr)

const a1=[2,9,0,7,6,5]
console.log(a1)
console.log("a1.splice(2,5) :- ",a1.splice(2,5))
console.log("a1 after splice() operation :- ",a1)

/*

slice(start,end) - 
it do not manipulate the actual array, sliced part in this will not be removed from the array 
and another difference is that the end limit is not included in this function


splice(start,end) - 
it actually manipulate the array sliced part in this will be removed from array the
and another difference is that the end limit is included in this function

*/ 
