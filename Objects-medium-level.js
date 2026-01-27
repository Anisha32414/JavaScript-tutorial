const new_object=new Object()
console.log(new_object)

const another_object={}
console.log(another_object)

another_object.name="anisha"
another_object.age=21
another_object.dept="AI"
another_object.location="delhi"
another_object.email="abc123@gmail.com"

console.log(another_object)

// object inside object --->

const obj={
    first_obj:{
        text:"hello",
        num:111,
        sign:{
            sign1:"@",
            sign2:"$",
            sign3:"#",
        }
    }
}

// way to extract data from object inside object

console.log(obj)
console.log(obj.first_obj)
console.log(obj.first_obj.text)
console.log(obj.first_obj.sign)
console.log(obj.first_obj.sign.sign2)

// merging multiple objects into one object

const obj1={"a":1,"b":2}
const obj2={"c":3,"d":4}

const obj3={obj1,obj2}                 //doing this will create 2 different objects in one object
console.log(obj3)

// To avoid what happen above we do this --->

const obj_merge=Object.assign({},obj1,obj2)     //this will merge objects in one common object
console.log(obj_merge)

// BUT mostly we will use method of "spread" to merge objects

const spread_obj={...obj1,...obj2}                  //--------------------> used 90% of time
console.log(spread_obj)

// sometime in complex program there are no. of objects exist inside a array as an element such as :-

const arr1=[
    obj_a={
        n1:1
    },
    obj_b={
        n2:2
    },
    obj_c={
        n3:3
    }
]

console.log(arr1[0].n1)
console.log(arr1[1].n2)                // this is how we will access those objects

// to access all the keys OR values OR entries

console.log(Object.keys(spread_obj))               // keys
console.log(Object.values(spread_obj))             // values
console.log(Object.entries(spread_obj))            // entries

// to check if there exist any key in object or not:-

console.log(spread_obj.hasOwnProperty("a"))        // print true/false
console.log(spread_obj.hasOwnProperty("z"))
