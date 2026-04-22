// *****************************Hitesh***********************************
// function saymyname(){

//     console.log('H')
//     console.log('i')
//     console.log('t')
//     console.log('e')
//     console.log('s')
//     console.log('h')
// }

// // saymyname(); 

// function addTwoNumbers(number1, number2) //parameter-> input
// {
//     // let result = number1 + number2;
//     // return result;
//     return number1 + number2;
//     console.log("code executed"); // no
// }

// const result = addTwoNumbers(3, 5)// argument;

// console.log("Result:", result); // Result: 8

// function loginUserMessage(username){
//     if (username === undefined) // or we can write !username{
//         console.log("please enter username");
        
//     }
//     return `${username}  just logged in`


// //  console.log(loginUserMessage("Hitesh"));
//  console.log(loginUserMessage())

// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,400,500,2000))

const user= {
    username: "hitesh",
    price :199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

//passing arrays

handleObject({
    username : "Mayank",
    price : 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]))



