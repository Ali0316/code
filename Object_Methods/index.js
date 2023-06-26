// Question 1: Write the code, one line for each action:

// 1) Create an empty object user

let user ={}

// 2) Add the property name with the value John
// 3) Add the property surname with the value Smith

user = {name: 'John', surname: "Smith"}

// 4) Change the value of the name to Pete

user.name = 'Pete';

// 5) Remove the property name from the object

delete user.name


// Question 2: Check if an object is empty or not

const obj = {}

if(!Object.keys(obj).length){
    console.log("Object is empty");
}

//2nd method using lodash library

// const isEmpty = require("lodash/isEmpty");
// console.log(isEmpty(obj));

//Question 3: We have an object storing salaries of our team:

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.

let sum=0;
let values=Object.values(salaries);
values.forEach((value)=> {
    sum+=value;
})

console.log(sum);


//Question 4: Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// For instance:
// before the call

let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

//Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
//P.S Use typeof to check for a number

function multiplyNumeric(obj){
    Object.keys(obj).forEach((key)=>{
        if(typeof obj[key]==='number'){
            obj[key]*=2;
        }
    })
}
console.log(menu);
multiplyNumeric(menu);
console.log(menu);


//Question 5: Create a parameterised function inside an object

let person = {
    display: (value)=>{
        console.log(`My name is ${value}`)
    }
}

person.display("Ali");