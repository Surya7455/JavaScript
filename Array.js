const myArr = [10,"a",12,"b",14,15,16]
console.log(myArr[0])
myArr.push(3) //push for using add new element
console.log(myArr)
myArr.pop(4) // pop for using the removing last value 
console.log(myArr) 
myArr.unshift(69) // unshift for using add value in frist place and shift all the value
console.log(myArr)
myArr.shift() // shift is used for removing the first value 
console.log(myArr)

const marvel_heroes = ["thor", "ironman"]
const dc_heroes = ["superman", "flash"]
marvel_heroes.push(dc_heroes);
console.log(marvel_heroes);
console.log(marvel_heroes[2][1]);
 
const all_heroes= marvel_heroes.concat(dc_heroes);
console.log(all_heroes);

const all_new = [...marvel_heroes, ...dc_heroes]
console.log(all_new);

const an_array = [1,2,3,[4,5,6,[7,8,9]]]
const real_array = an_array.flat(Infinity);
console.log(real_array);


console.log(Array.isArray("JIJIJI"))
console.log(Array.from("JIJIJI"))
console.log(Array.from({name : "JIJIJI"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));