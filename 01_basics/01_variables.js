const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  //not allowed
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bangluru"
console.log(accountId);
/*
prefere not to use var 
because of issue in block code
and function code
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])