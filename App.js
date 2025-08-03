// let a = "256";
// let numb = Number(a);
// console.log(numb);
// b = parseInt(a);
// console.log(b);

// const myObject = {
//   name: "Arya",
//   age: 20,
//   isStudent: true,
//   hobbies: ["reading", "coding"],
//   address: {
//     city: "Mumbai",
//     code: "400027"
//   }
// };

// console.log(`Name: ${myObject.name}`);
// console.log(`Favorite hobby: ${myObject.hobbies[0]}`);

// const arrayyy = [];
// for (let i = 1; i <= 100; i++) {
//   arrayyy.push(i);
// }

// for (let i = 0; i < arrayyy.length; i++) {
//   arrayyy[i] = arrayyy[i] * 3;
// }
// console.log(arrayyy);

// for (let i = 0; i < arrayyy.length; i++) {
//   if (arrayyy[i] % 5 == 0) {
//     console.log(arrayyy[i]);
//   }
// }

// let sum = 0;
// for (let i = 0; i < arrayyy.length; i++) {
//   sum += arrayyy[i];
// }
// console.log("Sum =", sum);

// let a2 = [...Array(100)].map((_, i) => (i + 1) * 3);
// console.log(a2.filter(x => x % 5 == 0));
// console.log("Sum =", a2.reduce((s, x) => s + x, 0)); // codegolf version

// const arrayyy2 = [3, 4, -5, -6, 7];
// let sum2 = 0;
// for (let i = 0; i < arrayyy2.length; i++) {
//   sum2 += arrayyy2[i];
//   if (sum2 > 0) {
//     console.log(sum2);
//   }
// }

// const users = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 28 }
// ];

// const t = users.reduce((sum, user) => sum + user.age, 0);
// const avg = t / users.length;

// console.log(`Average age is ${avg}`);

// try {
//   const jsonData = '{"name" : "Alice " , "age" : 20}';
//   const user = JSON.parse(jsonData);
//   console.log("User data: ", user.name);

//   const badJson = '{"name" : "Bob" }';
//   const badUser = JSON.parse(badJson);
//   console.log(badUser.name); // fixed: should be badUser.name, not badJson.name
// } catch (error) {
//   console.error("An error occurred!! Details : ", error.message);
// }
// console.log("Program continues to run here now!!!");

// const fs = require('fs/promises');

// async function processNames() {
//   const inputFilePath = "names.txt";
//   const outputFilePath = "formatted_names.txt";
//   try {
//     console.log("Starting to process file .......");

//     const fileContent = await fs.readFile(inputFilePath, 'utf8');

//     const names = fileContent.trim().split('\n');

//     console.log(`Read ${names.length} names`);

//     const formattedNames = names.map(name => {
//       const trimmedName = name.trim();
//       return trimmedName.charAt(0).toUpperCase() + trimmedName.slice(1).toLowerCase();
//     });

//     const outputContent = formattedNames.join("\n");

//     await fs.writeFile(outputFilePath, outputContent, 'utf8');
//     console.log(`Successfully processed names and saved to ${outputFilePath}`);
//   } catch (error) {
//     console.log("An error occurred during file processing:", error.message);
//   }
// }

// processNames();

// const fetch = require('node-fetch');
// async function fetchPosts() {
//     console.log("Fetching posts from API...");
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     try {
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const posts = await response.json();
//         console.log("Successfully fetched posts!!");
//         posts.slice(0, 5).forEach(post => {
//             console.log(`- ${post.title}`);
//         });

//     } catch (error) {
        
//         console.error("Failed to fetch posts:", error);
//     }
// }
// fetchPosts();

const num = BigInt(2) ** BigInt(1000);
const digits = num.toString().split("");
const sum = digits.reduce((acc, digit) => acc + Number(digit), 0);
console.log("Sum of digits of 2^1000 is:", sum);

