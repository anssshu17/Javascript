const accountId = 144522
let accountEmail = "bbbdbb@gmail.com"
var accountPassword = "24516"
accountCity = "Munger"
let accountState;
//accountState is undefined

//accountId = 2 // not allowed

accountEmail = "hbhcshh@.com"
accountPassword = "627372"
accountCity = "jmp"


console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table( [accountId, accountEmail, accountPassword, accountCity, accountState])