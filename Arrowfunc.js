const user ={
    username : "KIKIKIKI",
    price : 99,

    welcomeMessage : function(){
        console.log(`${this.username} , welocme to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username ="LILILI"
// user.welcomeMessage()
console.log(this);

function chai1 (){
    let username ="TITITI"
    console.log(this);
}
chai1()

const chai2 = function (){
    let username ="TITITI"
    console.log(this);
}
chai2()

const chai3 = () => { //Arrow Function
    let username ="TITITI"
    console.log(this);
}
chai3()

const addTwo1 =(num1,num2) =>{
    return num1+num2 // In {} must written the "return" and also object define in {}
}
console.log(addTwo1(3,4));

const addTwo2 =(num1,num2)=> num1 + num2;
console.log(addTwo2(3,4));

const addTwo3 =(num1,num2) => (num1+num2);
console.log(addTwo3(3,4));

