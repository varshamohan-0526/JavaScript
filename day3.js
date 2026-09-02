//Task 1

var Name="varsha";
let Age=20;
let City="hosur";
const College="Gce";

//1
console.log(Name);
console.log(Age);
console.log(City);
console.log(College);

//2
Name="jerry";
console.log(Name);

//3
Age=21;
console.log(Age);

//4
// College="bangalore";
// console.log(College); 

//Uncaught TypeError: Assignment to constant variable.

//5
// var Name="vivek";
// let Age=22;
// let City="salem";

//Uncaught SyntaxError: Identifier 'Age' has already been declared


//Task 2

//1
console.log("hello");

//2
alert("Hello jan");

//3
let one=confirm("Are you okay");
console.log("Confirm eg:"+one);

//4
let two=prompt("enter your name");
console.log("Prompt eg:" +two);

//5
document.writeln("Be happy always");


//Task 3

let name=prompt("Enter your name");
let age=prompt("Enter your age");
let city=prompt("Enter your city");
let qualification=prompt("Enter your qualification");

console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);
console.log("Qualification: " + qualification);

//Task 4

let str="JavaScript";
let numb=100;
let dec=99.5;
let bool1=true;
let bool2=false;
let und=undefined;
let nul=null;

console.log("str= " + str);
console.log("num= " + numb);
console.log("dec= " + dec);  
console.log("bool1= " + bool1);
console.log("bool2= " + bool2);
console.log("und= " + und);
console.log("nul=" + nul);

console.log(typeof(str));
console.log(typeof(numb));
console.log(typeof(dec));
console.log(typeof(bool1));
console.log(typeof(bool2));
console.log(typeof(und));
console.log(typeof(nul));


//Task  5

let students=["Arun","Priya","Kumar","Divya","Rahul"];

//1.
console.log("First student: " + students[0]);

//2
console.log("Second student: " + students[1]);

//3.
console.log("Last student: " + students[students.length-1]);

//4.
console.log("Total number of students: " + students.length);


//Task 6

let employee={
    name:"navi",
    age:25,
    role:"developer",
    skills:["html","css","javascript"],
    isworking:true,
    qualification:["B.E","M.E","PhD"]
}

//1.
console.log("Employee name: " + employee.name);

//2.
console.log("Employee age: " + employee.age);

//3.
console.log("Employee role: " + employee.role);

//4.
console.log("First skill:"+employee.skills[0]);

//5.
console.log("Last qualification:"+employee.qualification[employee.qualification.length-1]);

//6.
console.log("Working status:"+employee.isworking);


//Task 7

let a=20;
let b=5;

console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));
console.log("Exponentiation: " + (a ** b));


//Task 8
let shirt=999;
let pant=1499;
let shoes=1999;
let bag=799;

let total=shirt+pant+shoes+bag;

console.log("Total cost: " + total);


//Task 9

//A
//expected output: a1=11 ,b1=10

let a1=10;
let b1=a1++;

console.log("a1: " + a1);
console.log("b1: " + b1);

//B
//expected output:a2=11 ,b2=11

let a2=10;
let b2=++a2;

console.log("a2: " + a2);
console.log("b2: " + b2);


//C
//expected output:a3=9 ,b3=10

let a3=10;
let b3=a3--;

console.log("a3: " + a3);
console.log("b3: " + b3);

//D
//expected output:a4=9 ,b4=9

let a4=10;
let b4=--a4;

console.log("a4: " + a4);
console.log("b4: " + b4);

//Task 10

let num=10;

num+=5;
console.log("After +=5: " + num);

num-=3;
console.log("After -=3: " + num);

num*=2;
console.log("After *=2: " + num);  

num/=4;
console.log("After /=4: " + num);  

num%=3;
console.log("After %=3: " + num);   

num**=2;
console.log("After **=2: " + num);


//Task 11

console.log(10 > 5);  //true
console.log(10 < 5);   //false
console.log(10 >= 10);   //true
console.log(10 <=9);   //false
console.log(5 == "5"); //true
console.log(5 === "5");  //false
console.log(10 != "10");  //false
console.log(10 !== "10");  //true

//Task 12

console.log(true && true);  //true
console.log(true && false);  //false
console.log(false && false);  //false
console.log(false && false);  //false


//Task 13

console.log(true || true);  //true
console.log(true || false);  //true
console.log(false || true);  //true
console.log(false || false);  //false

//Task 14


console.log(!true); //false
console.log(!false); //true
console.log(!(5 > 10)); //true
console.log(!(10>5));  //false

//Task 15

console.log(5 == "5" && !(5 === 5) || 6 > 7);  //false

console.log(10 > 5 && 8 < 12 || 4 === "4");  //true

console.log(7 === 7 && 10 != "10" || 5 >= 5);  //true

console.log(15 < 10 || 20 > 15 && 5 == "5");  //true

//Task 16

let age1=20;

if(age1>-18){
    console.log("Eligible to vote");
}

else{
    console.log("Not eligible");
}

//Task 17

let password=true;

if(password){
    console.log("Login successful");
}
else{
    console.log("wrong password");
}

//Task 18

let name2 = "Naveen";
let age2 = 25;
let city2 = "Trichy";

console.log(`My name is ${name2}. I am ${age2} years old. I live in ${city2}.`);


//Task 19

//1
let ones=String(100);
console.log(ones);
console.log(typeof(ones));

//2
let twos=String(true);
console.log(twos);
console.log(typeof(twos));

//3
let threes=String(undefined);
console.log(threes);
console.log(typeof(threes));

//4
let fours=String(null);
console.log(fours);
console.log(typeof(fours));

//5
let fives=String([1,2]);
console.log(fives);
console.log(typeof(fives));

//Task 20

console.log(Number()); //0
console.log(Number(""));  //0
console.log(Number("123"));  //123
console.log(Number("a1"));  //NaN
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number(undefined)); //NaN
console.log(Number(null)); //0


//Task 21

console.log(Boolean()); //false
console.log(Boolean("")); //false
console.log(Boolean("hello")); //true 
console.log(Boolean(123)); //true
console.log(Boolean(true));  //true
console.log(Boolean(false));  //false
console.log(Boolean(undefined)); //false 
console.log(Boolean(null)); //false
console.log(Boolean([])); //true
console.log(Boolean({})); //true


//Task 22

let age_for_vote=prompt("Enter your age ");

if(age_for_vote >= 18){
    console.log("You can vote");
}

else{
    console.log("You can't vote");

}

//Task 23

let num_from_user=prompt("Enter a number");

if(num_from_user > 0){
    console.log("The number is positive");
}
else if(num_from_user < 0){
    console.log("The number is negative");
}
else{
    console.log("The number is zero");
}


//Task 24

let marks=prompt("Enter your marks");

if(marks <=100 && marks>=90){
    console.log("A Grade");
}

else if(marks <=89 && marks>=80){
    console.log("B Grade");
}

else if(marks <=79 && marks>=70){
    console.log("C Grade");
}

else if(marks <=69 && marks>=60){
    console.log("D Grade");
}

else{
    console.log("Fail");
}


//Task 25

var age_for_job=prompt("Enter your age");
var height_for_job=prompt("Enter your height");
var weight_for_job=prompt("Enter your weight");

if(age_for_job >= 18){
    if(height_for_job >= 160){
        if(weight_for_job >= 50){
            console.log("Congratulations! You are selected ");
        }
        else{
            console.log("Your weight is not  enough");
        }
    }
    else{
        console.log("your height is not enough");
    }
}
else{
    console.log("You are not eligible for the job");
}


//Task 26

let colour="red";

switch(colour){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("invalid color");
}

//Task 27

let day=3;

switch(day){
    case 1 :
        console.log("Monday");
        break;  
    case 2:
        console.log("Tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break;  
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;      
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;  
    default:
        console.log("Invalid day");
}

//Task 28

//Student Result System

let studentName=prompt("Enter your name");
console.log("Student Name: " + studentName);
let studentAge=prompt("Enter your age");
console.log("Student Age: " + studentAge);
let studentCity=prompt("Enter your city");
console.log("Student City: " + studentCity);

let tamil=prompt("Enter your tamil marks");
console.log("Tamil Marks: " + tamil);
let english=prompt("Enter your english marks");
console.log("English Marks: " + english);
let maths=prompt("Enter your maths marks");
console.log("Maths Marks: " + maths);

let total_marks=Number(tamil)+Number(english)+Number(maths);
console.log("Total Marks: " + total_marks);

let average_marks=total_marks/3;
console.log("Average Marks: " + average_marks);

if(average_marks>=90){
    console.log("A Grade");
}
else if(average_marks>=80){
    console.log("B Grade");
}
else if(average_marks>=70){
    console.log("C Grade");
}
else if(average_marks>=60){
    console.log("D Grade");
}
else{
    console.log("Fail");
}

if(studentAge>=18){
    console.log("Eligible to vote");
}   
else{
    console.log("Not eligible to vote");
}
