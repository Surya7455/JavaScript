// let a = 900
// b = 400
// if (a) {
//     let a = 10
//     console.log("Inner :",a);
//     const b =20
//     var c =30
// }
// console.log(a);
// console.log(b);
// console.log(c);

function one (){
    const username ="KOKO"

    function two (){
        const website =" YOYO"
        console.log(username);
    }
    // Function two access the Function one but Function one not access Function one 
    two()
}
one()
//######## Interseting ########

console.log(addone(3)); // It not give the error because how declare the function
function addone (num){
    return num + 1
}
//console.log(addone(3));


//console.log(addtwo(2));// It give the error because how declare the function
const addtwo = function(num){
    return num +2
}
console.log(addtwo(2));