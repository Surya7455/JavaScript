const name = "Hihi"
const repoCount = 100

//console.log(name + repoCount + " Value");

console.log(`Hello! I'm ${name} and my repo count is ${repoCount}`);

const gameName = new String('Hihi')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,2)
console.log(newString);

const anString = gameName.slice(-3, 0);
console.log(anString);

const newStr = "     Kunal    "
console.log(newStr)
console.log(newStr.trim()); //trim for use neglete the white space 

const url = "https://hihi.com/hghj%20ghughuern"
console.log(url.replace('%20', '-'));
console.log(url.includes('hihi'));
