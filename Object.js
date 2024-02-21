// Singleton --> Made by Constructor not by Object Literals

// Object Literals

const mySym = Symbol("key1")

const Jsuser ={
    name : "KIKI",
    age :"69",
    mySym : "mykey1", // It's not Symbol
    [mySym] : "mykey1", // It's Symbol
    location : "Dehli",
    email : "kiki6969@gmail.com"
}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser.mySym);
console.log(Jsuser[mySym]);
console.log(typeof Jsuser.mySym);

Jsuser.email = "jiji969@gmail.com" // Here email elment is changed
/*Object.freeze(Jsuser) // Here element is not changed
Jsuser.email = "hihi6969@gmail.com"
console.log(Jsuser);*/ // Here commit for making the function 

// If, you are using freeze than not change or add the values.

Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

/**Objects by Constructor(Singleton) */
const tinderUser = new Object(); //Singleton Object
console.log(tinderUser)

const tinderUser2 = {} // Non-Singleton Object


tinderUser2.id ="1234"
tinderUser2.name= "abc"
tinderUser2.isLoggedIn = false
console.log(tinderUser2)

const regularUser = {
    email : "kijihi9876@gamil.com",
    fullname : {
        userfullname : {
            firstname : "Hihi",
            lastname : "JijI"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
// const obj3 =( obj1, obj2);
const obj3 = Object.assign(obj1, obj2);
console.log(obj3)
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4)

//const obj5 = (...obj1, ...obj2)



const users =[
    {
        id : 1,
        email : "j1@gamil.com"
    },
    {
        id : 2,
        email : "j2@gamil.com"
    },
    {
        id : 3,
        email : "j3@gamil.com"
    },
    {
        id : 4,
        email : "j4@gamil.com"
    }
]
users[1].email
console.log(tinderUser2);

console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2));
console.log(Object.entries(tinderUser2));

/**Destructure */

const course = {
    coursename : "JS Learinig",
    price : "999",
    courseInstructor : "KILILI"
}
//course.courseInstructor

const {courseInstructor: instructor} = course
console.log(courseInstructor);
console.log(instructor);

const navbar = ({company}) => {
    //Destructure
}

navbar(company = "oioi")

/**Api */
//JASON
//Object Formate
{
    name : "lolo";
    price : "zero";
    consumer : "Nini"
}
//Array Formate
[
    {},
    {},
    {}
]

