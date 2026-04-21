//singleton
//object Literals


//Interviewer how this symbol key is used
//1 symbol lo usko object ki keys me define karo aur print karke dikha do

//USE OF SYMBOL
const mySum = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name" : "Hitesh Choudhary",
    [mySum]: "myKey1",
    age : 18,
    location : "jaipur",
    email : "mayanksarwa204@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email) //first way of accessing
// console.log(JsUser["email"]) // second way of accessing
// console.log(JsUser["full name"]) // full name ke liye second tarike ke alawa koi tarika nahi hai access karne ka 
// console.log(JsUser[mySum])
// console.log(typeof(JsUser[mySum]))

// JsUser.email = "mayanksarwa@chatgpt.com" ;
// // Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft.com";
// console.log(JsUser); 
// {
//  name: 'Hitesh',
// 'full name': 'Hitesh Choudhary',
//  age: 18,
//  location: 'jaipur',
//  email: 'mayanksarwa@chatgpt.com',
//  isLoggedIn: false,
//  lastLoginDays: [ 'Monday', 'Saturday' ],
//  Symbol(key1): 'myKey1'
//}

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS user
console.log(JsUser.greetingTwo()); // Hello JS user, Hitesh

















