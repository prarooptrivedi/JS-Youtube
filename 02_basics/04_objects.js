const tinderUser= new Object()

 tinderUser.id="123Abc"
 tinderUser.name="Praroop"
 tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email:"Some@gmail.com",
    fullname:{
        userFullName:{
            firsrName:"Praroop",
            lastName:"trivedi"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firsrName)

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj4={
    5:"a",
    6:"b"
}

// const obj3={obj1,obj2}

// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}

// console.log(obj3)

const users=[
    {
        id:1,
        email:"Praroop@gmail.com"
    },
     {
        id:2,
        email:"trypBuddy@gmail.com"
    }
]

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(Object.hasOwnProperty("name"))