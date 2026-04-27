//  for of 

//["", "", ""]
//[{}, {}, {}]

const arr = [12,3,4,5]

for(const num of arr){
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings){
    // console.log(`each char is ${greet}`)
}

//map
//Unique values
const map = new Map();
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map); /* Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
} */

for (const [key, value]  of map) {
    console.log(key, ':-', value);
}





