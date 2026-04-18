const account_Id = 1234567890;
let accountEmail="12345@xyz.com"
var accountPassword="12345"
accountCity ="jaipur"
let accountState;

console.log(typeof account_Id);
console.log(typeof accountEmail);
console.log(typeof accountPassword);
console.log(typeof accountCity);
console.log(typeof accountState);


//account_Id=2// not allowed because it is a constant variable

accountEmail="newemail@xyz.com"
accountPassword="newpassword"
accountCity="Bengaluru"

/* prefer not to use var because of issue in block sscope and functional scope
*/
 
console.log(account_Id)
console.log(accountEmail)
console.log(accountPassword)
console.table([account_Id, accountEmail, accountPassword, accountCity,accountState])

