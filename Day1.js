// Print a simple message to the console
console.log("Hello World.....");


// Import the 'cowsay' module to make the cow talk (fun ASCII art)
const cowsay = require("cowsay");


// Display a cow saying a message
console.log(cowsay.say({
    text: "I'm a moooodule"
}));


// Declare two constants with the same value
const a = 5;
const b = 5;


// Print the value of variable 'a' to the console
console.log('The value of a is ' + a);


// Define a function named 'greet' that takes a name and age and returns a greeting message
function greet(name, age) {
    let message = `Hello, ${name} !! Your age is ${age}`;
    return message;
}


// Call the greet function with arguments "Arya" and 20, and store the result in a variable
const greeting = greet("Arya", 20);


// Print the greeting message to the console
console.log(greeting);


// Initialize a counter variable
let counter = 0;


// Use a while loop to print the value of counter 3 times
while (counter < 3) {
    console.log(`Loop iterations :  ${counter} `);
    counter += 1; // Increment the counter by 1
}


// After the loop ends, print a final message
console.log("The while loop is finished !!");


// Create an array of fruit names
const fruits = ["Apple", "Banana", "Cherry"];


// Use a for loop to iterate over each fruit in the array
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i]; // Get the fruit at the current index
    console.log(`Fruit at index ${i} is ${fruit}`);
}


// Set a temperature value
let temperature = 25;


// Use if-else to check the temperature range and print appropriate messages
if (temperature > 30) {
    console.log("It's a hot day!!");
} else if (temperature > 20) {
    console.log("It's a pleasant day!!");
} else {
    console.log("It's a bit of a chill day!!");
}


// Function to calculate area (length × width). If width is not provided, it defaults to 1
function calculateArea(length, width = 1) {
    return length * width;
}


// Call the function with two values to calculate area of a rectangle
const reactangleArea = calculateArea(10, 5);
console.log(`Area of 10 X 5 rectangle is: ${reactangleArea}`);


// Call the function with only one value to calculate area of a square (width defaults to 1)
const squareArea = calculateArea(8);
console.log(`Area of square using side 8 is: ${squareArea}`);


// 1. Function expression: assign a function to a variable
const getSum = function(a, b) {
    return a + b;
};


// Call the getSum function
const sum = getSum(15, 20);
console.log(`The sum of 15 and 20 is: ${sum}`);


// 2. Arrow function: a shorter way to write functions
const mul = (x, y) => x * y;
console.log(`The product of 5 and 6 is: ${mul(5, 6)}`);


// 3. Regular named function to multiply two numbers
function mult(x, y) {
    const c = x * y;
    return c;
}
console.log(`The result from mult function (7 * 8) is: ${mult(7, 8)}`);




 summ=0;
for(i=1;i<1000;i++){
    if((i%3==0) || (i%5==0)){
        summ =summ + i;
    }
}
console.log(`THE SUM OF ALL NUMBERS BELOW 1000 THAT ARE DIVISIBLE BY 3 OR 5 IS : ${summ}`);


let a = 0;
let b = 1;
let f;


for (let i = 0; i < 4000000;) {
    f = a + b;
    a = b;
    b = f;


    if (f > 4000000) break;


    if (f % 2 === 0) {
        console.log(f);
    }


    i = f;
}


function pf(n) {
    const fact = [];
    let div = 2;


    while (n >= 2) {
        if (n % div === 0) {
            fact.push(div);
            n = n / div;
        } else {
            div++;
        }
    }


    return fact;
}




const num1 = 13195;
const fact1 = pf(num1);
console.log(`Prime factors of ${num1}:`, fact1);




const num2 = 600851475143;
const fact2 = pf(num2);
const largestFact = Math.max(...fact2);
console.log(`Largest prime factor of ${num2}:`, largestFact);


let n=5;
let result;
function facto(){
  result = n*facto(n-1);
}
console.log(`Factorial of 5 is : ${result}`);




