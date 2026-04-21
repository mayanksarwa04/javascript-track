//shraddha

function sum(a,b){
    return a + b;
}

// arrow sum
const arrowSum = (a,b) => {
    console.log(a+b);
}

//multiplication function
function mul(a,b){
    return a * b;
}

// arrow mul
 
const arrowmul = (a,b) => {
    console.log(a*b);
}

// funtion takes input as string & return no  of vowels in string


// function vowelcount(str){
//     let count = 0;
//     for(const char of str){
        
//         if (char === "a" ||
//             char === "e" ||
//             char === "i" ||
//             char === "o" ||
//             char === "u"

//         )
//         {
//             count++;
//         }
//     }
//     console.log(count);
// }

// vowelcount("Apna college");

const countvow = (str) =>{
    let count = 0;
    for(const char of str){
        
        if (char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"

        )
        {
            count++;
        }
    }
    return count;
}

console.log(countvow("apna college"));







function saymyname(){

    console.log('H')
    console.log('i')
    console.log('t')
    console.log('e')
    console.log('s')
    console.log('h')
}

// saymyname(); 

function addTwoNumbers(number1, number2) //parameter-> input
{
    // let result = number1 + number2;
    // return result;
    return number1 + number2;
    console.log("code executed"); // no
}

const result = addTwoNumbers(3, 5)// argument;

console.log("Result:", result); // Result: 8

function loginUserMessage(username){
    return `${username}  just logged in`
}

 console.log(loginUserMessage("Hitesh"));
 console.log(loginUserMessage())













