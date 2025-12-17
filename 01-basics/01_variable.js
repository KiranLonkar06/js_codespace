const account_id = 12345
let account_email = "kiranlonkar@gmail.com"
var account_Password = "123456"
account_city = "jaipur"
let account_state;

/*
prefer not to use var
because of functional scope and log scope*/
// account_id=2 not allowed 

account_email="Js@gmail.com"
account_Password=2345
account_city="nagpur"
console.log(account_id);
console.table([account_Password,account_email,account_city,account_state])
