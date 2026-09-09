//Task 1

console.log("===========Task-1============");

function student(name,dept,sub1,sub2,sub3,sub4,sub5){
    console.log("name is ",name);
    console.log("dept is",dept);
    let total=sub1+sub2+sub3+sub4+sub5;
    let average=(total)/5;
    console.log("total=",total);
    console.log("average =",average);


    if(sub1>=35 && sub2>=35 && sub3>=35 && sub4>=35 && sub5>=35){
    console.log("pass");  
}
    else{
    console.log("fail");
}

    if(average>=90){
    console.log("Grade-A");
}
    else if(average<=89 && average>=75){
    console.log("Grade-B");

}
    else if(average<=74 && average>=60){
    console.log("Grade-C");

}
    else if(average<=59 && average>=50){
    console.log("Grade-D");

}   
     else{
    console.log("fail");
}


    
}
student("Jana","EEE",90,89,90,78,90);




//Task-2

console.log("===========Task-2============");

var employee={
      name:"Arun",
      role:"Developer",
      salary:45000,
      experience:2
}


function calculateSalary(employee){
   let  basicSalary=employee.salary;
   var bonus=0;

    
    if(employee.experience >=2){
       bonus=basicSalary * 10/100;
        
    }
    else if(employee.experience >=5){
        bonus=basicSalary * 15/100;

    }

    let finalSalary=basicSalary+bonus;


    console.log("Name of emp:",employee.name);
    console.log("Role is:",employee.role);
    console.log("Basic salary:",basicSalary);
    console.log("Bonus:",bonus);
    console.log("Final Salary:",finalSalary);
    
}
calculateSalary(employee);


//Task-3

console.log("===========Task-3============");


let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];


let var1=products.filter((c,i,t)=>{
    return c.price>=2000;
})
console.log("The product above 2000",var1);


let var2=products.filter((c,i,t)=>{
    return c.category == "electronics";
})
console.log("Electronice only:",var2);


let var3=products.find((c,i,t)=>{
    return c.price<1000;
})
console.log("The product below 1000",var3);

let var4=products.reduce((acc,c,i,t)=>{
    return acc+c.price;
},0)
console.log("Total price",var4);

let var5=products.some((c,i,t)=>{
    return c.price>=50000;
})
console.log("Any product above 50000:",var5);

let var6=products.every((c,i,t)=>{
    return c.price>500;
})
console.log("Every product below 500",var6);


//Task-4

console.log("===========Task-4============");

let employees=[
    { 
        id: 101,
        name: "Varsha",
        role: "Frontend Developer",
        salary: 40000
     },
     {
        id: 102,
        name: "Jana",
        role: "Backend Developer",
        salary: 100000
     },
     {
        id: 103,
        name: "Jash",
        role: "Full Stack",
        salary: 60000
     },
     {
        id: 104,
        name: "Diya",
        role: "Sql Developer",
        salary: 70000
     }

]

let bar1=employees.map((c,i,t)=>{
    return c.name;
})
console.log("Emp names:",bar1)


let bar2=employees.filter((c,i,t)=>{
    return c.salary>=40000

})
console.log("Salary above 40k:",bar2);


let bar3=employees.find((c,i,t)=>{
    return c.id==103

})
console.log("Emp with id-103:",bar3);

let bar4=employees.reduce((acc,c,i,t)=>{
    return acc+c.salary;
},0)
console.log("Total salary",bar4);


let bar5=employees.find((c,i,t)=>{
    return c.salary>70000
})
console.log("High-paid employee:",bar5);

let bar6=employees.sort((a,b)=>{
    return b.salary-a.salary;

})

console.log("high to low:",bar6);


let newArr=[
    {name:"Varsha"},
    {name:"Jana"},
    {name:"Jash"},
    {name:"Diya"}
]

let bar7=newArr.map((c,i,t)=>{
    return c.name;
})
console.log("New array emp names:",bar7);


//Task-5

console.log("===========Task-5============");

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {

    let cart_value = cart.reduce((acc, c) => {
        return acc + (c.price * c.quantity);
    }, 0);

    console.log("Total cart value:", cart_value);

    let discount = 0;

    if (cart_value > 50000) {
        discount = cart_value * 10 / 100;
        console.log("Discount:", discount);
    }

    let final_amount = cart_value - discount;

    console.log("Final payable amount:", final_amount);
}

calculateCart(cart);


//Task-6

console.log("===========Task-6============");


let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

let jar1=students.map((c,i,t)=>{
    return c.name;
})
console.log("Nmae of students:",jar1);

let jar2=students.filter((c,i,t)=>{
    return c.mark>80;
})
console.log("Mark greater than 80:",jar2);

let jar3=students.find((c,i,t)=>{
    return c.name == "Priya";
})
console.log("Details of priya:",jar3);

let jar4=students.reduce((acc,c,i,t)=>{
    return acc+c.mark/4;
},0)
console.log("Average mark is:",jar4);

let jar5=students.some((c,i,t)=>{
    return c.mark<35;
})
console.log("Is anyone failed:",jar5);

let jar6=students.every((c,i,t)=>{
    return c.mark>40;
})
console.log("Everone got above 40?:",jar6);

let jar7=students.sort((a,b)=>{
    return b.mark-a.mark;
})
console.log("Students sorted based on marks:",jar7);

//Task-7

console.log("===========Task-7============");


let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


let vat1 = numbers.map((c, i, t) => {
    return c * 2;
});

console.log("Numbers × 2:", vat1);


let vat2 = numbers.filter((c, i, t) => {
    return c % 2 === 0;
});

console.log("Even numbers:", vat2);


let vat3 = numbers.filter((c, i, t) => {
    return c > 15;
});

console.log("Numbers greater than 15:", vat3);


let vat4 = numbers.find((c, i, t) => {
    return c > 20;
});

console.log("First number greater than 20:", vat4);


let vat5 = numbers.reduce((acc, c, i, t) => {
    return acc + c;
}, 0);

console.log("Total:", vat5);


let vat6 = numbers.some((c, i, t) => {
    return c > 40;
});

console.log("Any number greater than 40:", vat6);


let vat7 = numbers.every((c, i, t) => {
    return c > 0;
});

console.log("Every number is positive:", vat7);


let vat8 = numbers.sort((a, b) => {
    return b - a;
});

console.log("Highest to lowest:", vat8);


//Task-8

console.log("===========Task-8============");



let str="JavaScript is very powerful"

console.log("Total characters:",str.length);
console.log("Upper case:",str.toUpperCase());
console.log("Lower case:",str.toLowerCase());
console.log("Contains:",str.includes("JavaScript"));
console.log("First Character:"+str.startsWith('J'));
console.log("Last Character:"+str.endsWith('l'));
let words = str.split(" ");
console.log("Number of words:", words.length);
console.log("Replacements:",str.replace("JavaScript","Python"));
console.log("Split:",str.split());


//final-mini project

console.log("===========Final-Task===========");


let employeess = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


//1.
let emp1=employeess.map((c,i,t)=>{
    return c;
})
console.log("Employee list:",emp1);

//2.
let emp2=employeess.map((c,i,t)=>{
    return c.name;
})
console.log("Employee name:",emp2);

//3.
let emp3=employeess.filter((c,i,t)=>{
    return c.department == "HR";
})
console.log("Department filter:",emp3);

//4.
let emp4=employeess.filter((c,i,t)=>{
    return c.salary>50000;
})
console.log("Salary filter:",emp4);

//5.
let emp5=employeess.reduce((acc,c,i,t)=>{
    return acc+c.salary;
},0)
console.log("Total salary:",emp5);

//6.
let emp6=employeess.filter((c,i,t)=>{
    return c.salary>60000;
})
console.log("High-salary:",emp6);

//7.
let emp7=employeess.filter((c,i,t)=>{
    return c.experience>3;
})
console.log("Experience:",emp7);

//8.
//1.
let emp8 = employeess.sort((a, b) => {
    return b.salary - a.salary;
});

console.log("Highest to lowest:", emp8);

//2.
let emp9 = employeess.sort((a, b) => {
    return a.salary - b.salary;
});

console.log("Lowest to Highest:", emp9);






















