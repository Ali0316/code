/* Question 1

Let’s try 5 array operations.

1) Create an array styles with items “Jazz” and “Blues”.
2) Append “Rock-n-Roll” to the end.
3) Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
4) Strip off the first value of the array and show it.
5) Prepend Rap and Reggae to the array.

Answer:                                                                                                     */

//  1)
let styles = ["Jazz","Blues"];

//  2)
styles.push("Rock-n-Roll");

//  3)
console.log(styles);
styles.splice((styles.length-1)/2,1,"Classics");
console.log(styles);

//  4)
styles.shift();
console.log(styles);

//  5)
styles.unshift("Rap","Raggae");
console.log(styles);




/* Question 2
Write the function sumInput() that:

Calculates and returns the sum of array items.

Answer:                                                                             */

function sumInput(arr){
    let sum = 0;
    arr.forEach((value) => sum+=value)
    return sum;
}

let arr=[12,15,91];
console.log(sumInput(arr));



/* Question 3
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

The function should not modify the array. It should return the new array.

For instance:

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)


Answer:                                                                                 */

function filterRange(arr, a, b){
    let result = 0;
    arr.filter((x)=>{
        if(x>=a && x<=b){
            result++;
        }
    })
    return result;
}


let array1 = [5,3,8,1,2,7];
let filtered = filterRange(array1,1,4);
console.log(filtered);
console.log(array1);



/* Question 4

Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log( arr ); // [3, 1] 


Answer                                                                                              */

function filterRangeInPlace(arr, a, b){
    for(let i=0;i<arr.length;i++){
        if(arr[i]<a || arr[i]>b){
            arr.splice(i,1);
        }
    }
}

let array2 = [5, 3, 8, 1];
console.log(array2);
filterRangeInPlace(array2, 1, 4);
console.log(array2);



/* Question 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names =  ... your code 

console.log( names ); // John, Pete, Mary


Answer                                                                                      */

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
console.log(users);

let names = users.map((x)=> x.name)
console.log(names);



/* Question 6
You have an array of user objects, each one has name, surname and id.

Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.

For instance:

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped =  ... your code ... 

usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith
So, actually you need to map one array of objects to another. Try using => here. There’s a small catch.



Answer:                                                                                     */


let john1 = { name: "John", surname: "Smith", id: 1 };
let pete1 = { name: "Pete", surname: "Hunt", id: 2 };
let mary1 = { name: "Mary", surname: "Key", id: 3 };

let users1 = [ john1, pete1, mary1 ];

let usersMapped = users1.map(x=>({fullName: x.name+" "+x.surname, id: x.id}))
console.log(usersMapped); 



/* Question 7

Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



Answer:                                                                                             */

let getAverageAge = (arr)=>{
    let result=0;
    arr.map(x=>result+=x.age)
    return result;
}

let john2 = { name: "John", age: 25 };
let pete2 = { name: "Pete", age: 30 };
let mary2 = { name: "Mary", age: 29 };

let arr3 = [ john2, pete2, mary2 ];

console.log( getAverageAge(arr3) );



/* Question 8

Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance:

function unique(arr) {
  your code
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) );

*/

function unique(arr) {
    return [... new Set(arr)]
}
  
let strings = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];
console.log(unique(strings));

