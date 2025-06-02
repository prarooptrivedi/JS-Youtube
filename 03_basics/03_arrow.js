const user={
    username:"Praroop",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
         console.log(this)
        
    }
}
// this is basical return current context

//  user.welcomeMessage()

// user.username="Sangeeta"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let userName="Praroop"
//     console.log(this.userName)
// }
// chai()

// const chai = function(){
//     let userName="Praroop"
//     console.log(this.userName)
// }

// chai()


// const chai=()=>{
//     let username="praroop"
//     console.log(this)
// }
// chai()

// const addTwo=(num1,num2)=>{
// return num1+num2
// }

// console.log(addTwo(3,4))


// const addTwo=(num1,num2)=> num1+num2





// const addTwo=(num1,num2)=>(num1+num2)//implicit return 

const addTwo=(num1,num2)=>({username:"Praroop"})

 console.log(addTwo(3,5))