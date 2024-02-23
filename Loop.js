// ---->>>for loop<<<----
for (let i = 0; i <= 10; i++) {
    const element = i;   
    if(element == 5){
        //console.log("5 is best number");
    } 
    //console.log(element);
}

for (let i = 1; i <=10; i++){
    //console.log(`Outer loop value : ${i}`);
    for(let j=1; j<=10; j++){
        //console.log(`Inner loop value : ${j} and inner loop ${i}`);
        //console.log(1 + "*" + j + '=' + i*j );
    }
}

let myArray = ["flash","Ironman","Superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}

// ---->>>break and continue<<<---
for (let index = 1; index <= 20; index++) {
    if (index==5) {
        //console.log(`Detected 5`);
        break
    }
   // console.log(`Value of is ${index}`); 
}

for (let index = 1; index <= 20; index++) {
    if (index==5) {
       // console.log(`Detected 5`);
        continue
    }
    //console.log(`Value of is ${index}`); 
}
// ---->>>While Loop<<<----

let index = 0 
while (index <= 10) {
    //console.log(`Value of Index is ${index}`);
    index = index + 2;
}

let newArray =["flash","Ironman","Superman"]

let arr=0 
while (arr < myArray.length){
    //console.log(`Value is ${myArray[arr]}`);
    arr = arr+ 1
}

// ---->>> do while loop <<<----

let score = 11
do{
    //console.log(`Score is ${score}`);
    score ++
}while(score <= 10);

// ---->>> for of loop <<<----
// ["", "", ""]
// [{},{},{}]

const arr1 =[1,2,3,4,5]
for (const num of arr1) {
    //console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
}

// --->>> Maps <<<---
const map = new Map()
map.set('IN', "India")
map.set('USA', "Untied State of America")

//console.log(map);

for (const key of map) {
    //console.log(key);
}

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

const myObject ={
    js : 'javascript',
    py : 'pyhton',
    rb : 'ruby',
    swift : 'swift'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

// --->>>Note<<<---
// for of loop is not working on Object. So, we used for in loop in Object


// ---->>> for in loop <<<----


for (const key in myObject) {
    //console.log(key); // only for keys
   // console.log(`${key} shortcut is for ${myObject[key]}`); // keys with values
}

const programming = ["js","rb", "py", "java"]

for (const key in programming) {
    //console.log(key); // Only give the key
    //console.log(programming[key]); // Give keys and Values 
}
// ---->>>Note Only for Arrays<<<----
// for of give the both keys and values in normally
// but in, for in not giving the both keys and values in normally syntax 

// ---->>>for each loop<<<----

const coding = ["java","python","javascript"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach(item => {
//     console.log(item);
// });

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    //console.log(item.languageFileName);
}) 

const myNums = [1,2,3,4,5,6,7,8,9]

// const newNums = myNums.filter( (num)=> {
//    return num >4
// })
// console.log(newNums);

// const newNums = myNums.map((num)=> {return num +10} )

const newNums = myNums
                 .map((num) => num * 10 )
                 .map((num)=> num+1)
                 .filter((num) => num =>40 )
//console.log(newNums);

// ---->>>reduce() <<<----

const myNumbers = [1,2,3,4,5]

// myTotal = myNumbers.reduce(function (acc, currval){
   // console.log(`acc ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0 )

//console.log(myTotal);

const myTotal  = myNumbers.reduce((acc, curr) =>acc+curr,0 )
console.log(myTotal);

const shoppinCart = [
    { 
        itemname : "js course",
        price : 299
    },
    { 
        itemname : "py course",
        price : 399
    },
    { 
        itemname : "c++ course",
        price : 499
    },
    { 
        itemname : "java course",
        price : 999
    }
]

const pricePay = shoppinCart.reduce((acc, item)=> acc + item.price ,0 )
console.log(pricePay);