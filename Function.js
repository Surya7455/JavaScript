function sayMyName (){
    console.log("H");
    console.log("I");
    console.log("H");
    console.log("I");
}
sayMyName()
/** function name=> sayMyName
 * function sayMyName(){} => Syntax
 * sayMyName => Function reference
 * sayMyName() => Function Exictuted
 */

function addTwoNumbers(number1, number2){//number1 and number2 called as Parameters
    //console.log(number1+number2); 
    //let result = number1 + number2 // First Method 
   // return result
   return number1+number2 // second method
}
addTwoNumbers(3,4) //3 and 4 called as reguiment
addTwoNumbers(3,"4")//3 and "4" called as reguiment
addTwoNumbers(3,"a")//3 and "a" called as reguiment
addTwoNumbers(3,null)//3 and null called as reguiment
const result =addTwoNumbers(2,4);
//console.log("Result : ",result);


function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("HIHIHI"));
console.log(loginUserMessage())

function calculatedCartPrice(...num1){ // ... rest operator
    return num1
}

console.log(calculatedCartPrice(200,400,500));

function calculatedCartPrice2(val1, val2,...num2){ 
    return num1
}

console.log(calculatedCartPrice2(200,400,500,900.9999));

const user ={
    username : "JUJUJU",
    price : 123
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username}and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username : "popo",
    price :999
})

const myNewArray =[200,300,400]

function returnSecindValue(getArray){
    return getArray[1]
}

console.log(returnSecindValue(myNewArray));
console.log(returnSecindValue([200,300,400,500,600]));