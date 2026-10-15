const accountId=12233
let accountEmail="rahul@gmail.com"
var accountPassword="12345"
accountCity="bhopal"
let accountState;

// accountId=2 not allowed
accountEmail="h@gmail.com"
accountPassword="3434"
accountCity="indore"
console.log(accountId);

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])
/*
prefer not to use var becouse
of issue in block scope and functional scope
*/ 