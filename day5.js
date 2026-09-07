//1.

// | Keyword | Re-declare | Re-assign | Scope          |
// | ------- | ---------- | --------- | -------------- |
// | `var`   |  Yes       |   Yes     | Function scope |
// | `let`   |  No        |   Yes     | Block scope    |
// | `const` |  No        |   No      | Block scope    |

//2.

// *var →  Can be re-declared
// *let →  Cannot be re-declared in the same scope
// *const →  Cannot be re-declared in the same scope

//example:

// var x = 10;
// var x = 20;     // allowed

// let y = 10;
// let y = 20;  // Error

// const z = 10;
// const z = 20; // Error


//3.

//output:TypeError: Assignment to constant variable

// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);


//4.
//Declaring: Declaring the variable means initialy creating the variable by using let,const and var keyword.
//eg: let a;

//Initializing:initializing means we are assigning the value to that particular variable.
//eg:let a=10;


//5.

//output:undefined  (because the variable is assigned but not declared)

//let a;
//console.log(a);


//6.

//Hoisting is JavaScript's behavior of processing declarations before executing the code.

//for var:

//console.log(x);
//var x = 10;   

//output:undefined

//for let and const

// console.log(y);
// let y=1;

//output:error because of temporal dead zone..


//7.

//null:null means we intentionally assign an empty or no value.

//let y = null;
//console.log(y);

//undefined:undefined means a variable has been declared but no value has been assigned.

// let x;
// console.log(x);


//8.

//null
//undefined
//object
//object

//9.

//== => loosly equals means it checks only the value not the datatype.
//          eg: 5=='5'  means true because the value is same

//=== => strictly equals means it checks both the value and the datatypes
//          eg: 5==='5'  means false because the datatype is  different.


//10.

// ++i — Pre-increment:

// First increments, then uses the value.

// let i = 5;

// console.log(++i);  output:6


// i++ — Post-increment

// First uses the value, then increments.

// let i = 5;

// console.log(i++);  output:5
// console.log(i);    output:6

//11.

//output:105, 5,50,2

let x = 10;
let y = "5";
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

//12

//Logical operators are used to combine or reverse conditions.

//&&-Returns true when both conditions are true.
//eg:console.log(10 > 5 && 20 > 10);  output:true

//||-Returns true when at least one condition is true.
//eg:console.log(10 > 5 || 20 < 10);  output:true

//! -Reverses the result.
//eg:console.log(!(10 > 5));  output:false

//13

//output:true,true,false

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

//14.

//Ternary operator:The ternary operator is a short way of writing a simple if-else.

//eg:
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);

//15.

//Implicit TypeCasting:JavaScript automatically converts one datatype into another.

//eg:
let x1 = "10";
let y1 = 5;

console.log(x1 + y1); //output:105

//Explicit TypeCasting:  We manually convert the datatype.

//eg:
let x3 = "10";

console.log(Number(x3)); //10


//16.

//output:123,Nan,1,0,false,true

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

//17.

//NaN means Not a Number.
//It occurs when JavaScript tries to perform an invalid numeric conversion/calculation.

//eg

let xz = Number("hello");

console.log(xz);  

//18.

// if-else:

// Used when we need to check conditions or ranges.

// let age = 20;

// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

// switch:

// Used when we compare one value against multiple fixed cases.

// let day = 2;

// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     default:
//         console.log("Invalid day");
// }

//19.

//output:Adult

let ages = 20;
if(ages >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//20.

//nested if:A nested if means having an if statement inside another if statement.

let agex = 20;
let hasID = true;

if(agex >= 18) {

    if(hasID == true) {
        console.log("Entry allowed");
    }

}

//output:Entry allowed

//21.

let num=10;

let ans=(num%2==0)?"even":"odd";

console.log(ans);


//22.

// *while

// The condition is checked before executing the loop.

//eg:

//let i = 1;

// while(i <= 3) {
//     console.log(i);
//     i++;
// }

// If the condition is false initially, the loop executes 0 times.

// *do-while

// The code executes first, then the condition is checked.

//eg:
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while(i <= 3);

//23.

//output:    1
        //   2
        //   3
        //   4
        //   5

for(let i = 1; i <= 5; i++) {
    console.log(i);
}


//24.

//for-of:Used to get the values from an iterable such as an array.

//eg:
let fruitss = ["Apple", "Banana", "Mango"];

for(let fruit of fruitss) {
    console.log(fruit);
}

//output:Apple,Banana,Mango

//for-in:Used to get the keys/indexes.

//eg:
let fruitsz = ["Apple", "Banana", "Mango"];

for(let index in fruitsz) {
    console.log(index);
}

//output:0,1,2

//25.

let sum = 0;

for(let k = 1; k <= 100; k++) {
    sum = sum + k;
}

console.log(sum);


//26.

// slice():

// Used to extract a portion of an array.
// Does not change the original array.

let array = [10, 20, 30, 40, 50];

let results = array.slice(1, 4);

console.log(results);
console.log(array);

// Output:[20, 30, 40]
//        [10, 20, 30, 40, 50]


// splice():

// Can add/remove elements.
// Changes the original array.
// let arr = [10, 20, 30, 40, 50];

// arr.splice(1, 2);

// console.log(arr);

// Output:[10, 40, 50]


//27

//output:1.[1,2,3]

let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr);

//28.

//function declaration:The function is declared using the function keyword.

//eg:
function greet() {
    console.log("Hello");
}

greet(); //hello

//function expression:A function is assigned to a variable.

//eg:
let greets = function() {
    console.log("Hello world");
};

greets();  //Hello world

//29.

//An arrow function is a shorter syntax for writing a function.

let add = (a, b) => {
    return a + b;
};

console.log(add(10, 20)); //30


//30.

//output:Hello

function greet() {
    return "Hello";
}
let message = greet();
console.log(message);













