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


