const accoundId = 123456789;
let accooundEmail = "rahulsingh00C@gmail.com";
var accountPassword = "12345";
accountCity = "Mumbai";

// accoundId = 2 // not allowed because it is a constant
accooundEmail = "prince@gmail.com";
accountPassword = "123444444";
accountCity = "Delhi";
console.log(accoundId);
/*
prefer not to use var 
because of issue in block scope and fuctional scope
*/

console.table([accoundId, accooundEmail, accountPassword, accountCity]);
