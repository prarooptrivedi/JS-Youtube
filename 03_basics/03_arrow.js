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

console.log(this)

