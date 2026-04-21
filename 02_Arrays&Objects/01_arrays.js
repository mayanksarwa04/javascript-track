// let items =[250,645,300,900,50]


// let i=0;
// for (let val of items){

//     let offer = val/10;
//     items[i] -= offer
//     console.log(`value after offer ${items[i]} `)
//     i++
// }

// for (let i=0; i < items.length;i++){
//     let offer = items[i]/10;
//     items[i] -=offer;
// }

// for (let i=0; i < items.length; i++){
//     console.log(`value after items ${items[i]}`)
// }

// const myArray = [0,1,2,3,4,5,6,7,8,9];;

// myArray.push(10); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// myArray.pop(); //[0, 1, 2, 3, 4, 5, 6, 7, 8]
// myArray.toString(); //
// myArray.unshift(10) //[10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// myArray.shift() //[1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(myArray.slice(1,3)); //[ 1, 2 ]
// myArray.splice(2,3,101,102); //[0, 1, 101, 102, 5, 6, 7, 8, 9]
// myArray.splice(2,0,100) // TO ADD [0, 1, 100, 2, 3, 4, 5, 6, 7, 8, 9]
// myArray.splice(2,1)  //TO DELETE [0, 1, 3, 4, 5, 6, 7, 8, 9]
// myArray.splice(3,1,101) //TO REPLACE [0, 1, 2, 101, 4, 5, 6, 7, 8, 9]


// console.log(myArray.includes(9)) // true
// console.log(myArray.indexOf(3)) // 3

// const newArr = myArray.join()

// console.log(myArray);
// console.log(newArr); // 0,1,2,3,4,5,6,7,8,9


//INTERVIEW QUESTION ---

//DIFFRENCE BETWEEN SLICE AND SPLICE


const myArray2 = [0,1,2,3,4,5];

console.log("A",myArray2); // A [ 0, 1, 2, 3, 4, 5 ]
const myn1= myArray2.slice(1,3); 

console.log(myn1); // [1,2]
console.log("B",myArray2); // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArray2.splice(1,3);
console.log(myn2); // [ 1, 2, 3 ]
console.log("C", myArray2); // C [ 0, 4, 5 ] 

// ANS -- BECAUSE SPLICE MANUPULATE THE WHOLE ORIGINAL ARRAY (NOT BEACUSE OF RANGE OR SOMETHING)
// LIKE HERE SPLIC HAS CUTTED DOWN THE WHOLE ARRAY 











