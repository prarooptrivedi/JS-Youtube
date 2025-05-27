//array() parenthisis [] bracket {} braces


const myArray=[0,1,2,3,4,5]

const myHeros=["Praroop","Ankit"]
const myArr2= new Array(1,2,3)
// console.log(myArray[1])

//Array methods

// myArray.push(6)// add value in array

// myArray.pop() // remove last value 

// myArray.unshift(0)// add value in start
// myArray.shift()// remove first value

// console.log(myArray.includes(9)) // check value is exist or not in bollean value

// console.log(myArray.indexOf(3)) // check value in index

 const newArr=myArray.join()

//  console.log(myArray)
//  console.log(newArr)

// slice , splice

console.log("A ",myArray)

const myn1=myArray.slice(1,3)


console.log(myn1)

console.log("B ",myArray)


const myn2=myArray.splice(1,3)

console.log(myn2)