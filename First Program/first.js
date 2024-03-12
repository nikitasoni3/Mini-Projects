//Create a new button element with text "Click me!", backgroundColor-red, textColor-white. 
// Insert the element as first element inside body tag
let btn = document.createElement("button");
btn.innerText = "Click me!";
btn.style.backgroundColor = "red";
btn.style.color = "white";

let bodyTag = document.querySelector("body");
bodyTag.prepend(btn);

let para = document.querySelector("p");
para.classList.add("newClass");

//Create 3 div with common class name "box", access them and add some unique text to each of them
// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for(div of divs){
//     div.innerText = `Unique text value ${idx}`;
//     idx++;
// }

// divs[0].innerText = "Unique text for box 1";
// divs[1].innerText = "Unique text for box 2";
// divs[2].innerText = "Unique text for box 3";

//Create h2 heading element with text "Hello JS", and append some text with this
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
// h2.innerText += " from Nikita Soni";
// console.dir(h2.innerText);

//take a n number as input from user
// let n = prompt("Enter a number(n): ");

// let arr = [];
// for(let i=1; i<=n; i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// let sum = arr.reduce((prev, curr)=>{
//     return prev+curr;
// })
// let prod = arr.reduce((prev, curr)=>{
//     return prev*curr;
// })
// console.log(`sum = ${sum}`);
// console.log(`prod = ${prod}`);

//Filter out the marks of students that scored 90+
// const marks = [87, 90, 39, 76, 99, 90, 49, 96, 32, 98, 100];
// let topperStu = marks.filter((val) =>{
//     return val>90;
// })
// console.log(topperStu);

//Array Methods - forEach, map, filter, reduce
// let arr = [11, 20, 300, 4, 50, 66, 7, 8, 9, 10];

// //reduce
// let sum = arr.reduce((prev, curr) => {
//     return prev < curr ? prev : curr;
// })
// console.log(sum);
//Filter
// let evenArr = arr.filter((val) =>{
//     return val%2!=0;
// })
// console.log(evenArr)

//forEach
// let calcsquare = (num)=>{
//     console.log(`Square of ${num}: `, num**2);
// }
// arr.forEach(calcsquare);

//map
// let arr1 = ['mumbai', 'pune', 'delhi'];
// let newArr1 = arr.map((val) =>{
//     return val**2;
// })
// let newArr = arr1.map((val) =>{
//     return val.toUpperCase();
// })
// console.log(arr1);
// console.log(newArr);
// console.log(arr);
// console.log(newArr1);;

// arr1.map
//Function to return number of characters in a string argument
// function countVowels(str){
//     let count=0;
//     str = str.toLowerCase();
//     console.log(str);
//     for(let val of str){
//         if(val=='a' || val=='e' || val=='i' || val=='o' || val=='u'){
//             count++;
//         }
//     }
//     console.log(`Number of Vowels in ${str}: `, count);
// }
//Arrow functions
// const arrowCountVowels = (str) =>{
//     let count = 0;
//     str = str.toLowerCase();
//     console.log(str);
//     for(let val of str){
//         if(val=='a' || val=='e' || val=='i' || val=='o' || val=='u'){
//             count++;
//         }
//     }
//     console.log(`Number of Vowels in ${str}: `, count);
// }

//Functions in JS
// function sum(a, b){
//     console.log(a+b);
// }

// const arrowSum = (a, b) => {
//     return a+b;
// }
// function mul(a, b){
//     console.log(a*b);
// }

//
//let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// let del = companies.shift();
// console.log(companies);
// console.log("deleted item: ",del);
// companies.splice(1, 1, "OLA");
//console.log(companies);
// companies.push("Amazon");
// console.log(companies);


//
// let OrgPrice = [250, 645, 300, 900, 50];
// for(let i=0; i<OrgPrice.length; i++){
//     let offer = OrgPrice[i]/10;
//     OrgPrice[i] -= offer;
// }
// console.log(OrgPrice);

//average of array marks
// let marks = [85, 97, 44, 37, 76, 60];
// let sum =0;
// for(let val of marks){
//     sum+=val;
// }
// // for(let i=0; i<marks.length; i++){
// //     sum+=arr[i];
// // }
// let avg = sum/arr.length;
// console.log(`Average of given array is ${avg}`);


//generate username
// let name = prompt("EnterYourFullNameWithoutSpaces: ");
// let username = "@"+name+name.length;
// console.log(`Your user-name: ${username}`);

//Number guessing game
// let gameNum = 13;
// let input = prompt("Guess the number:");
// while(gameNum!=input){
//     input = prompt("You entered wrong number, guess again: ");
// }

// console.log("Congratulation, you entered the right number");

//print even numbers from 0 to 100
// let count=0;
// for(let i=0; i<=1000; i++){
//     if(i%2==0){
//         console.log(i);
//         count++;
//     }
// }
// console.log("Total even numbers from 0 to 1000: ", count);

//for-in loop
// let student = {
//     name: "Nikki",
//     age: 21,
//     cgpa:9.75,
//     isPass: true
// };

// for(let key in student){
//     console.log(key, " = ", student[key]);
// }

//for-of loop
// let name="qwerrrrrrrrrrrrrrrrrrty";
// let count=0;
// for(let val of name){
//     console.log("val = ", val);
//     count++;
// }
// console.log("String size is: ", count);

// if-else loop
// let num = prompt("Enter your score");
// // let res= num%5==0 ? "is a Multiple of 5" : "is Not a multiple of 5";
// if(num>=90 && num<=100){
//     console.log("A");
// }else if(num>=70 && num<=89){
//     console.log("B");
// }else if(num>=60 && num<=69){
//     console.log("B");
// }else if(num>=50 && num<=59){
//     console.log("B");
// }else{
//     console.log("F");
// }


// console.log("Nikita Soni");

// const product = {
//     name:"Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270
// };

// console.log(product);

// const profile = {
//     name: "Nikita Soni",
//     isFollow: true,
//     posts: 1,
//     followers: 78,
//     following: 150,
//     description: "Be happy and smile always" 
// };

// console.log(profile);