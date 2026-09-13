//1.

let link1=' https://fakestoreapi.com/products';

fetch(link1);
fetch(link1).then((data)=>{
        return data.json();
})


.then((jsdata)=>{    
    jsdata.forEach((c,i,t)=>{
        console.log(c);
        console.log(c.title);
        console.log(c.price);
        console.log(c.category);
    })
    
    let art1=jsdata.map((c,i,t)=>{
        console.log(c.title);
        console.log(c.price);

    })
    
    let art2=jsdata.filter((c,i,t)=>{
        return c.price > 100;
    })
    console.log(art2);
    
    let art3=jsdata.find((c,i,t)=>{
        return c.category=="electronics";
    })
    console.log(art2);  
    
    let art4=jsdata.reduce((arr,c,i,t)=>{
        return arr+c.price;

    },0)
    console.log("Total price:",art4);
 
    let art5=jsdata.sort((a,b)=>{
        return b.price - a.price;
    })
    console.log(art5);
    
})

.catch((error)=>{
    console.warn(error.message);
})

.finally(()=>{
    console.log("API works successfully")
})


2.


let link2 = 'https://fakestoreapi.com/products';



function productDashboard() {

    fetch(link2)
        .then((data1) => {
            return data1.json();
        })

        .then((jsdata1) => {

            console.log(`===== PRODUCT DASHBOARD =====`);


            let bat1 = jsdata1.length;

            console.log(`Total Products: ${bat1}`);


            
            let electronics = jsdata1.filter((c, i, t) => {
                return c.category == "electronics";
            });

            console.log(`Electronics: ${electronics.length}`);


           
            let jewelery = jsdata1.filter((c, i, t) => {
                return c.category == "jewelery";
            });

            console.log(`Jewelery: ${jewelery.length}`);


            
            let mens = jsdata1.filter((c, i, t) => {
                return c.category == "men's clothing";
            });

            console.log(`Men's Clothing: ${mens.length}`);


            
            let womens = jsdata1.filter((c, i, t) => {
                return c.category == "women's clothing";
            });

            console.log(`Women's Clothing: ${womens.length}`);


            let prices = jsdata1.map((c, i, t) => {
                return c.price;
            });


            let sortedPrices = prices.sort((a, b) => {
                return a - b;
            });


            let lowestPrice = sortedPrices[0];

            console.log(`Lowest Price: $${lowestPrice}`);


            // Highest Price
            let highestPrice = sortedPrices[sortedPrices.length - 1];

            console.log(`Highest Price: $${highestPrice}`);


            let totalPrice = prices.reduce((acc, c, i, t) => {
                return acc + c;
            }, 0);


            let averagePrice = totalPrice / jsdata1.length;

            console.log(`Average Price: $${averagePrice.toFixed(2)}`);

        })

        .catch((error) => {
            console.log("Error:", error);
        });
}


// Calling the function
productDashboard();


//Task 3



// let link3="https://jsonplaceholder.typicode.com/users";

// let link4="https://jsonplaceholder.typicode.com/posts";

// fetch(link3).then((data3)=>{
//     return data3.json();
// })

// .then((jsdata3)=>{
    

//     let vat1=jsdata3.map((c,i,t)=>{
//         console.log(c);
//         console.log("Username:",c.name);
//     })
//     let vat4=jsdata3.forEach((c,i,t)=>{
//         console.log("username:",c.name);
//         console.log("email:",c.email);
//     })

//     let vat2=jsdata3.find((c,i,t)=>{
//         return c.id == 5;
//     })
//     console.log("Users with id5:",vat2);

//     let vat3=jsdata3.filter((c,i,t)=>{
//         return c.address.city == 'South Elvis';

//     })
//     console.log("City:",vat3);
// })


// fetch(link4).then((data4)=>{
//     return data4.json();
// })

// .then((jsdata4)=>{
    

//     let gat1=jsdata4.forEach((c,i,t)=>{
//         console.log(c);
//     })

//     let gat2=jsdata4.filter((c,i,t)=>{
//         return c.userId == 1;
//     })
//     console.log("userid is 1:",gat2);


//     let gat3 = gat2.reduce((acc, c, i, t) => { 
//         return acc + 1;
//      }, 0); 
//      console.log("Number of posts by user ID 1:", gat3);


//      let gat4=gat2.find((c,i,t)=>{
//         return c.title.length > 50;
//      })
//      console.log("First post greater than 50 characters:",gat4);


// })


//Task 4


// let link5 = "https://fakestoreapi.com/products";

// fetch(link5)
// .then((data5)=>{
//     return data5.json();
// })
// .then((jsdata5)=>{

//     let product = prompt("Enter product category:");
//     let price = Number(prompt("Enter maximum price:"));

//     function cond(product, price){

//         let result = jsdata5.filter((c,i,t)=>{
//             return c.category == product && c.price <= price;
//         });

//         console.log(result);
//     }

//     cond(product, price);

// });



    



//Task 5


// let link6="https://fakestoreapi.com/products";

// fetch(link6).then((data6)=>{
//     return data6.json();
// })

// .then((jsdata6)=>{
//     console.log(jsdata6);

//     let kat1=jsdata6.filter((c,i,t)=>{
//         return c.id % 2==0

//     })
   

//     console.log("Selected products:")

//     let kat2=kat1.forEach((c,i,t)=>{

//         console.log("product id:",c.id);
//         console.log("product title:",c.title);
//         console.log("product price:",c.price);
//     })


//     let kat3=kat1.reduce((acc,c,i,t)=>{
//         return acc+c.price;
//     },0)
//     console.log("Cart Total:",kat3);

//     let discount=0;

//     if(kat3 > 200){
//         discount=kat3*20/100;
        
//     }
//     else if(kat3>100){
//         discount=kat3*10/100;
       
//     }

//     let final_amount=kat3-discount;

//     console.log("Discount:",discount);
//     console.log("Total amount:",final_amount);

// })




 //Task 6

 

// let link7="https://fakestoreapi.com/products";

// //fetch api
// fetch(link7).then((data7)=>{
//     return data7.json(); //convert response
// })

// .then((jsdata7)=>{
     
//     let vax1=jsdata7.forEach((c,i,t)=>{ //display all products
//         console.log("Display all products:",c);
//     })

//     let vax2=jsdata7.map((c,i,t)=>{
//         return c.title;
//     })
//     console.log("Product names array:",vax2);


//     let vax3=jsdata7.filter((c,i,t)=>{
//         return c.price>100;
//     })
//     console.log("Expensive product:",vax3);


//     let vax4=jsdata7.find((c,i,t)=>{
//         return c.category=="electronics";
//     })
//     console.log("Electronic product:",vax4);


//     let vax5=jsdata7.reduce((acc,c,i,t)=>{
//         return acc+c.price;
//     },0)
//     console.log("Total price:",vax5);

//     let vax6=jsdata7.some((c,i,t)=>{

//         return c.category=="electronics";
//     })
//     console.log("Checking some:",vax6);

//      let vax7=jsdata7.every((c,i,t)=>{

//         return c.category=="electronics";
//     })
//     console.log("checking every:",vax7);


//     let vax8=jsdata7.sort((a,b)=>{
//         return b.price - a.price;
//     })
//     console.log("Sortings:",vax8);
// })

// .catch((error)=>{
//     console.warn(error.message);
// })

// .finally(()=>{
//     console.log("API works successfully");
// })



