// //shraddha

// function sum(a,b){
//     return a + b;
// }

// // arrow sum
// const arrowSum = (a,b) => {
//     console.log(a+b);
// }

// //multiplication function
// function mul(a,b){
//     return a * b;
// }

// // arrow mul
 
// const arrowmul = (a,b) => {
//     console.log(a*b);
// }

// // funtion takes input as string & return no  of vowels in string


// // function vowelcount(str){
// //     let count = 0;
// //     for(const char of str){
        
// //         if (char === "a" ||
// //             char === "e" ||
// //             char === "i" ||
// //             char === "o" ||
// //             char === "u"

// //         )
// //         {
// //             count++;
// //         }
// //     }
// //     console.log(count);
// // }

// // vowelcount("Apna college");

// // const countvow = (str) =>{
// //     let count = 0;
// //     for(const char of str){
        
// //         if (char === "a" ||
// //             char === "e" ||
// //             char === "i" ||
// //             char === "o" ||
// //             char === "u"

// //         )
// //         {
// //             count++;
// //         }
// //     }
// //     return count;
// // }

// // console.log(countvow("apna college"));


// //forEach //HigherOrder Function/Method
// // let arr=["pune", "delhi", "mmumbai"];
// // arr.forEach((val,idx,arr) => {
// //     console.log(val.toUpperCase(), idx,arr);
// // })

// //Practice question 
// // given arr of no , print the square of each value using forEach loop
// let nums = [2,3,4,5,6];

// // nums.forEach((nums) => {
// //     console.log(nums*nums); // nums ** 2
// // })

// // let calSquare = (nums) => {
// //     console.log(nums * nums);
// // };

// // num.forEach(calSquare);


// //map
// //tocreate new array with result of the operation

// nums.map((val) => {
//     console.log(val); //2,3,4,5,6
// });

// // let newArr = nums.map((val) => {
// //     return val;
// // })

// // filter 
// let arr= [1,2,3,4,5,6,7];

// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenArr);

// //reduce

// let arr5 = [1,2,3,4];

// // const output = arr.reduce((res, curr) =>{
// //     return res + curr;
// // })

// //largest element 

// const largest = arr5.reduce((prev, curr) =>{
//     return prev > curr ? prev : curr;
// })
// console.log(largest); // 4

// let n = prompt("enter a number:");

// let arr = [];

// for(let i=0; i<n; i++){
//     arr[i-1] =i;
// }

// console.log(arr);

// // reduce method factorial 
// let factorial = arr.reduce((res, curr) => {
//     return res * curr;
// })

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













