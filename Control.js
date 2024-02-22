// if Statement 
//--->>>Syntax<<<---
// if (condition) {
    //////////////
// }
const isUserLoggedIn = true
const temperature =41
if (temperature==41){
    console.log("ARE YOU RIGHT")
}

const balance = 1000
if (balance < 500){
    console.log("Greater Than 500")
}else if (balance<750){
    console.log("Greater than 750");
}else{
    console.log("Less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedbyGoogle =true
const LoggedbyEmail = true

if (userLoggedIn && debitCard)(
    console.log("Alow to buy course")
)

if (loggedbyGoogle || LoggedbyEmail ){
    console.log("User Logged");
}

// Switch Statement 
//--->>>Syntax---<<<
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const mounth = 3
switch (mounth) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("maerch");
        break;
    default:
        console.log("NAN");
        break;
}

// #####Truthy And Falsy

const userEmail = "JIJI699@gmail.com"
if (userEmail){
    console.log("Got user Email");
}

/**Falsy Value ---->>><<<---
 * false, 0, -0, BigInt 0n, "", null, undefined, NaN
 */

/**Truthy Value ---->>><<<----
 * "0", "false"," ",[], {}, function(){},
 * false ==0
 * false ==""
 */

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//---->>>Nullish Coalescling Operator (??) : null undefined<<<-----

let val1;
//val1 = 5 ?? 10 // Value in output is 5
//val1 = null ?? 10 // Value in output is 10
//val1 = undefined ?? 15 //Value in output is 15
val1 = null ?? 10 ?? 20 // Value in output is 10
console.log(val1);

// ---->>> Terniary Operataor <<<----
// condition ? true : false

const iceTaePrice = 100
iceTaePrice <= 80 ? console.log("Less than 80"): console.log("More than 80");