//Task 1

for(let i=1;i<=10;i++){
    console.log(i);
}

//Task 2

for(let j=10;j>=0;j--){
    console.log(j);
}

//Task 3

for(let k=2;k<=20;k+=2){
    console.log(k);
}

//Task 4

for(let l=1;l<=20;l+=2){
    console.log(l);

}

//Task 5

for(let m=1;m<=10;m++){
    console.log("5"+"X" +m+ "="+5*m);
}


//Task 6

let n=10;

while(n>=0){
    console.log(n);
    n--;
}

//Task 7

let sum=0;
for(let o=1;o<=10;o++){
    sum=sum+o;
}
console.log(sum);

//Task 8

let p=1;

do{
    console.log(p);
    p++;
}while(p<=5);


//Task 9

//output:10

//Reason:Eventhough the condition false the output occurs because do-while print the output onetime before checking the condition.

//Task 10

let name="javascript";

for(let x of name){
    console.log(x);
}

//Task 11

let fruits=["apple","orange","banana","mango","grapes"]

for(let y of fruits){
    console.log(y);
}


//Task 12

let student=["arun","priya","vasanth","shaik","rana"]

for(let z of student){
    console.log("Student : ",z);
}

//Task 13

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for(let t in employee){
    console.log(t,employee[t]);
}

//Task  14

let product={
    productName:"Fridge",
    price:2500,
    brand:"LG",
    category:"AA",
    stock:"Available"
}

for(let g in product){
    console.log(g,product[g]);

}

//Task 15

function welcome(){
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();


//Task 16

function greet(name){
    console.log("Hello",name);
}
greet("Naveen");
greet("Arun");
greet("Priya");

//Task 17

function students(name,age,department){
    console.log("Student name:"+name);
    console.log("Student age:"+age);
    console.log("Student department:"+department);

}
students("Rahavi",25,"CSE");

//Task 18

function add(n1,n2){
    return n1+n2;
}
let result=add(10,20);
console.log(result);

//Task 19

function salary(amount) {
    return amount;
}
let res=salary(50000);
console.log("salary:",res);

//Task 20

function bonus(salary,bonusAmount){
    return (salary+bonusAmount);   
}
let tot=bonus(50000,5000);
console.log("Total="+tot);

//Task 21

function employees(name,role="Developer"){
    console.log(name,role);
}
employees("Arun");
employees("Priya","Designer");

//Task 22

function square(number) {
    return number * number;
}
let x1=console.log("square of 2 is:"+square(2));
let x2=console.log("square of 3 is:"+square(3));
let x3=console.log("square of 4 is:"+square(4));
let x4=console.log("square of 5 is:"+square(5));
let x5=console.log("square of 6 is:"+square(6));

//Task 23

let calculates = function(a1, b1) {
    return a1 + b1;
}
let q1=calculates(1,2);
console.log(q1);

//Task 24

let multiplys = (a2, b2) => {
    return a2 * b2;
}

let q2=multiplys(10,20);
console.log(q2);

//Task 25

//expected output:10,20,30,10

//error:when the let and const is accessed outide the block means it shows like the variable is undeclared

//Reason:var is the global scope so can be accessed within and outside the block and let and const is the block scope so it can be accessed within the block only.

function test() {

    if (true) {

        var g1 = 10;
        let g2 = 20;
        const g3 = 30;

        console.log(g1);
        console.log(g2);
        console.log(g3);
    }

    console.log(g1);
//     console.log(g2);
//     console.log(g3);
}

test();

//Task 26

//expected output:undefined

console.log(a);

var a = 10;

//Task 27

//expected output: error because in let before hoisting is not possible.
//error:Uncaught ReferenceError: Cannot access 'bg' before initialization

// console.log(bg);

// let bg = 20;

//Task 28

//expected output: error because in const before hoisting is not possible.
//error:Uncaught ReferenceError: Cannot access 'cg'  before initialization

// console.log(cg);

// let cg = 20;


//Task 29

 (function (){
    console.log("Welcome to JavaScript");
 })(); 
 (function (productss,discountss){
    console.log("Discount:",discountss);
 })("powder","20%");

 //notes:IIFE is a function that is created and executed immediately.


//Task 30

//notes:execute is the higher order function and  welcome is the callback function.

//expected output:welcome

function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);

//Task 31

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";


}
let resu=cashback();

for(let a9 of resu){
    console.log(a9);
}

//Task 32

let employeess = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Karthik",
        age: 28,
        department: "IT",
        role: "Team Lead",
        salary: 50000
    },
    {
        name: "Divya",
        age: 26,
        department: "Finance",
        role: "Accountant",
        salary: 38000
    }
];


// 1. for...of
console.log("----- ALL EMPLOYEES -----");

for (let employee of employeess) {
    console.log(employee);
}


// 2. for...in
console.log("----- KEYS AND VALUES -----");

for (let employee of employeess) {

    for (let key in employee) {
        console.log(key + " : " + employee[key]);
    }

    console.log("----------------");
}


// 3 & 4. Function with parameters
function displayEmployee(name, age, department, role, salary) {

    console.log("Name       : " + name);
    console.log("Age        : " + age);
    console.log("Department : " + department);
    console.log("Role       : " + role);
    console.log("Salary     : " + salary);

}


// Calling the function
console.log("----- EMPLOYEE INFORMATION -----");

for (let employee of employeess) {

    displayEmployee(
        employee.name,
        employee.age,
        employee.department,
        employee.role,
        employee.salary
    );

    console.log("----------------");
}


// 5. Return
function getSalary(employee) {
    return employee.salary;
}

console.log("----- SALARY -----");

for (let employee of employeess) {
    console.log(employee.name + " Salary: " + getSalary(employee));
}


// 6. Condition
console.log("----- SALARY >= 40000 -----");

for (let employee of employeess) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " earns 40000 or more");
    }
}


// 7. Arrow function
let annualSalary = (salary) => {
    return salary * 12;
};

console.log("----- ANNUAL SALARY -----");

for (let employee of employeess) {
    console.log(
        employee.name + " Annual Salary: " + annualSalary(employee.salary)
    );
}


// 8. Generator
function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefits = employeeBenefits();

console.log("----- EMPLOYEE BENEFITS -----");

for (let benefit of benefits) {
    console.log(benefit);
}