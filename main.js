/*
Welcome to Day 2: Operators and Control Flow Exercises!

In this exercise set, we will focus on practicing various operators and control flow statements in JavaScript. Each exercise is designed to reinforce your understanding of arithmetic, comparison, logical operators, as well as if-else conditions, loops, switch statements, and more.

Take your time to read each exercise carefully, and write your solutions below each comment. Remember to test your code by running the JavaScript file and checking the console for the expected output.

Don't worry if you encounter any difficulties along the way. Learning is a process, and each exercise will contribute to your growth as a JavaScript developer. Stay motivated, embrace the challenges, and enjoy the journey of mastering operators and control flow in JavaScript!

Let's get started with the exercises: */

// Exercise 1: Arithmetic Operators
// Instructions: Perform arithmetic operations on the given variables `num1` and `num2`. Use addition, subtraction, multiplication, division, and modulo operations.
// - Your solution here:
let num1 = 10;
let num2 = 5;
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulo = num1 % num2;
console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);
console.log(modulo);


// Exercise 2: Comparison Operators
// - Instructions: Compare the values of the variables `num1` and `num2` using comparison operators.
// - Your solution here:
// not equal
console.log(num1 != num2);
// is greater than
console.log(num1 > num2);
// is greater equal
console.log(num1 >= num2);
// is less than
console.log(num1 < num2);
// is less equal
console.log(num1 <= num2);

// Exercise 3: Logical Operators
// - Instructions: Perform logical AND, OR, and NOT operations on the variables `bool1` and `bool2`.
// - Your solution here:
let bool1 = true;
let bool2 = false;

// Logical AND
if (bool1 && bool2) {
  console.log("Both bool1 and bool2 are both true");
}

// Logical OR
if (bool1 || bool2) {
  console.log("Either bool1 or bool2 is true");
}

// Logical NOT
if (!bool1) {
  console.log("bool1 is false");
}



// Exercise 4: If-Else Conditions
// - Instructions: Check if the variable `num` is positive, negative, or zero using an if-else statement. Log the appropriate message to the console.
// - Your solution here:
let num = 1;
if(num >= 1) {
  console.log("positive");
} else if(num < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// Exercise 5: Switch Statement
// - Instructions: Determine whether the given `day` is a weekday or a weekend day using a switch statement. Log the corresponding message to the console.
// - Your solution here:
let day = "Saturday";
switch(day) {
  case "Monday" :
  case "Tuesday" :
  case "wednesday" :
  case "Thursday" :
  case "Friday" :
    console.log("weekday");
    break;
  case "Saturday" :
  case "Sunday" :
    console.log("weekend");
    break;
    
  default:
    console.log("Invalid day");
}
// Exercise 6: For Loop
// - Instructions: Use a for loop to log the numbers from 1 to 10 to the console.
// - Your solution here:
for(let i = 1; i <=10; i++) {
  console.log(i);
}

// Exercise 7: While Loop
// - Instructions: Log the value of the variable `count` to the console using a while loop until it reaches 10.
// - Your solution here:
let count = 1;
while(count <= 10) {
  console.log(count);
  count++;
}

// Exercise 8: Do-While Loop
// - Instructions: Log the value of the variable `num` to the console and increment it by 1 using a do-while loop until it reaches 10.
// - Your solution here:
let Num = 0;
do {
Num += 1;
console.log(Num);
} while (Num < 10) ;

// Exercise 9: Ternary Operator
// - Instructions: Log a message to the console based on the value of the variable `isRaining` using a ternary operator.
// - Your solution here:
let isRaining = false;

let message = isRaining ? "Remember to take an umbrella!" : "No need for an umbrella.";

console.log(message);


// Exercise 10: Nested If-Else Statements
// - Instructions: Compare the values of the variables `num1` and `num2` using nested if-else statements. Log the highest value to the console.
// - Your solution here:
if(num1 > num2) {
  console.log(num1);
} else if(num2 > num1) {
  console.log(num2);
} else {
  console.log("Both numbers are equal.");
}

// Exercise 11: Break and Continue Statements
// - Instructions: Log the numbers from 1 to 10 to the console using a for loop. Use the break statement to stop the loop when the value reaches 5, and the continue statement to skip logging the number 7.
// - Your solution here:
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
  if (i === 7) {
    continue;
  }
}


// Exercise 12: Multiple Cases in Switch Statement
// - Instructions: Determine the color of the given `fruit` using a switch statement. Log the corresponding message to the console.
// - Your solution here:
let fruit = "yellow";
switch(fruit) {
  case "yellow" :
    console.log("the fruit is yellow in color");
    break;
  case "red" :
    console.log("the fruit is red in color");
    break;
  default:
    console.log("The fruit has no color");
}

// Exercise 13: Control Flow with Array
// - Instructions: Calculate the square of each number in the `numbers` array using a for loop. Log the result to the console.
// - Your solution here:
let numbers = [2, 3, 4, 5];
for(let i = 0; i< numbers.length; i++) {
  let square = numbers[i] * numbers[i];
  console.log(square);
}


// Exercise 14: Control Flow with Objects
// - Instructions: Access and log the properties of the `person` object using dot notation or bracket notation.
// - Your solution here:

const person = {
  firstName: "Feisal",
  lastName: "Adan",
  age: 20,

};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
