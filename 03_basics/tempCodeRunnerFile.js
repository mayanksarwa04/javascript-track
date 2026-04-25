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

function loginUserMessage(username){
    if (username === undefined) // or we can write !username{
        console.log("please enter username");
        
    }
    return `${username}  just logged in`
}

//  console.log(loginUserMessage("Hitesh"));
 console.log(loginUserMessage())
