//task1

var stu_name="varsha";
let age=21;
const c_name="Gce";

//1.
console.log(stu_name);
console.log(age);
console.log(c_name);

//2.
stu_name="jan";
console.log(stu_name);

//3.
age=23;
console.log(age);

//4.reassign of const

// c_name="kpr"; 
// error:TypeError: Assignment to constant variable.

//5. redeclaration of var
var stu_name="jerry";
console.log(stu_name);

//6.redeclaration of let
// let age =25;
// console.log(age);
//error:SyntaxError: Identifier 'age' has already been declared



//task 2 

let name=prompt("Enter your name");
let age1=prompt("Enter your age");
let city=prompt("Enter your city");

console.log("Name: "+name);
console.log("Age: "+age1);
console.log("City: "+city);


//task 3

let user_name=prompt("enter your name");
alert(user_name);

//task 4

let u_b_year=prompt("Enter your birth year");
let age_of_user=2026-u_b_year;
console.log("Birth year:"+u_b_year);
console.log("Age:"+age_of_user);

//task 5  (identify the datatypes)

console.log(typeof("hello")); //string
console.log(typeof(100)); //number
console.log(typeof(25.5)); //number
console.log(typeof(true)); //boolean
console.log(typeof(false)); //boolean
console.log(typeof(undefined)); //undefined
console.log(typeof(null)); //object

//task 6

let emp={
    name:"visha",
    age:22,
    city:"hosur",
    qualification:"B.E",
    isstudent:true
};
console.log(emp);
console.log(emp.name);
console.log(emp.age);
console.log(emp.qualification);
console.log(emp.isstudent);


//task 7

var fruits=["Apple","Mango","Orange","Banana","Grapes","Papaya"]
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);
console.log(fruits.length);


//task 8

let a=20;
let b=5;
console.log("Addition: "+(a+b));
console.log("Subtraction: "+(a-b));
console.log("Multiplication: "+(a*b));
console.log("Division: "+(a/b));
console.log("Modulus: "+(a%b));
console.log("Exponentiation: "+(a**b));

//task 9

let shirt=999;
let pant=1499;
let shoes=1999;
let total_price=shirt+pant+shoes;
console.log("Total ="+total_price);


//task 10

let tamil=80;
let english=75;
let maths=90;
let total_marks=tamil+english+maths;
let average=total_marks/3;
console.log("total marks:" + total_marks);
console.log("Average:" + average);

//task 11

//expected output:a=11, b=10

let a1=10;
let b1=a1++;
console.log("a:"+a1);
console.log("b:"+b1);

//task 12
//expected output:a=11, b=11

let a2=10;
let b2=++a2;
console.log("a:"+a2);
console.log("b:"+b2);


//task 13

//expected output:a=19, b=20

let a3=20;
let b3=a3--;
console.log("a:"+a3);
console.log("b:"+b3);

//task 14
//expected output:a=19, b=19
 
let a4=20;
let b4=--a4;
console.log("a:"+a4);
console.log("b:"+b4);

//task 15

//expected output:a=7,b=4,c=7,d=5 

var a5=5;
var b5=a5++;
var c5=++a5;
var d5=b5--;
console.log("a:"+a5);
console.log("b:"+b5);
console.log("c:"+c5);
console.log("d:"+d5);

//task 16-Assignment operators

//add
let num1=10;
num1+=5;
console.log(num1);

//sub
let num2=10;
num2-=5;
console.log(num2);

//mul
let num3=10;
num3*=5;
console.log(num3);

//div 
let num4=10;
num4/=5;
console.log(num4);

//mod
let num5=10;
num5%=5;
console.log(num5);

//exponentiation
let num6=10;
num6**=5;
console.log(num6);


//task 17

//student-profile:

let Name="Jana";
let Age=22;
let City="salem";
let College="sona";
let Subjects=["tamil","english","maths","science","social science"];
let student={
    name:Name,
    age:Age,
    city:City,
    subjects:Subjects,
    isStudent:true
};

console.log("Student Name:"+student.name);
console.log("Student Age:"+student.age);
console.log("Student City:"+student.city);
console.log("First subject:"+student.subjects[0]);
console.log("Last subject:"+student.subjects[student.subjects.length - 1]);
console.log("Total subjects:"+student.subjects.length);
console.log("complete object:",student);


//Final challenge

let number1=Number(prompt("Enter first number"));
let number2=Number(prompt("Enter second number"));
let add=number1+number2;
let sub=number1-number2;
let mul=number1*number2;
let div=number1/number2;
let mod=number1%number2;
let pow=number1**number2;

console.log("Addition: "+add);      
console.log("Subtraction: "+sub);
console.log("Multiplication: "+mul);
console.log("Division: "+div);
console.log("Modulus: "+mod);
console.log("Exponentiation: "+pow);


    




