

// global scope
 let a=300;
if (true){
    // Block scope
    let a = 10;
    const b=20;
    // var c=30; // 30 print nahi hona tha kyoki  scope ki andar ki value bahar nahi jani chahiye
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Mayank"

    function two(){
        const website =  "youtube"
        console.log(username)
    }
    // console.log(website);
    two()
}
// one()

// ++++++++++++++++++++++++interesting++++++++++++++++++++++++

function addone(num){
    return num + 1
}
addone(5)

// diffrence or concept of hoisting

console.log(addone(5))

function addone(num){
    return num + 1
}
//upar wale me sirf declaration diya hai 
//ERROR : CANNOT ACCESS 'ADDTWO' BEFORE INITIALIZATION
// niche wale me declaration ke sath variable me hold bhi ka diya hai
addTwo(5)
const addTwo = function(num){
    return + 1
}



