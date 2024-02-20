let myDate = new Date ()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let myCrDate = new Date(2026, 0, 24)
console.log(myCrDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCrDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.getFullYear);