

function sayMyName(){
console.log("P")
console.log("R")
console.log("A")
console.log("R")
console.log("O")
console.log("O")
console.log("P")
}

// sayMyName()


function addTwoNumber(number1,number2){
    // console.log(number1+number2)
    // let result=number1+number2
    // return result

    return number1+number2
}
// addTwoNumber(4,"2")


// addTwoNumber(4,2)

const result=addTwoNumber(3,5)


 
// console.log("Result",result)

function loginUser(userName){
    if(userName ===undefined){
        console.log("Value is Blank") 
    }
    else{

    }
    return `${userName} just logged in.`
}

// console.log(loginUser("Praroop"))
// console.log(loginUser())


function calculateCartPrice(val1,val2,...num1){
return num1
}

// console.log(calculateCartPrice(200,400,800,1000))

const user={
    username:"Praroop",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)

handleObject({
     username:"Pratek",
    price:199
})

const myNewArr=[200,300,4000,8000]

function returnSecondValue(arr){

    return arr[2]

}
console.log(returnSecondValue(myNewArr))
