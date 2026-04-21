// const tinderUser =new Object() // {} //singleton Object

const tinderUser = {} // {} // non-Singleton Object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false; 

console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
        firstname: "Mayank",
        lastname: "Sarwa"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // Mayank

const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj4 = Object.assign({}, obj1,obj2,obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// const obj4 = {...obj1,...obj2}; // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// console.log(obj4); 

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]


const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "hitesh" 
}
const {courseInstructor} = course;

console.log(courseInstructor); // hitesh

// const {courseInstructor : instructor} = course 

// console.log(instructor); //hitesh

