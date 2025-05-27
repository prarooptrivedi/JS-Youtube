// SingleTon
// objects literals

// Object.create

const mySym=Symbol("Key1")
const JsUser={
    name:"Praroop",
    "full name":"Praroop Trivedi",
    [mySym]:"MyKey1",
    age:18,
    email:"Praroop@gmail.com",
    location:"Jaipur",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}

// console.log(JsUser.email)

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email="trypBuddy@gmail.com"
// console.log(JsUser.email)



// Object.freeze(JsUser)

JsUser.email="tryp@gmail.com"
// console.log(JsUser.email)
// console.log(JsUser)

JsUser.greeting = function(){

    console.log("Hello Js User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.age}`)
}
// console.log(JsUser.greeting)
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())