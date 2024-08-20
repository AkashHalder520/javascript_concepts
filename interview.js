// 1)is odd or even
function isEvenorOdd(num) {

  if(num % 2 == 0){
    console.log(`${num} is a Even number`)
  }
  else{
    console.log(`${num} is a Odd number`)
  }
}

isEvenorOdd(10) //"10 is a Even number"
isEvenorOdd(19) //"19 is a Odd number"

// 2) Check if input variable is a number or not

function isValidNumber(num) {

  if(isNaN(num)){
      console.log(`${num} is not a number`)
  }
  else{
    console.log(`${num} is a valid number`)
  }
}

isValidNumber(11) //"11 is a valid number"

// 3)Find the largest of two number

function findLargest(num1, num2) {

  if(num1 > num2){
    console.log(`${num1} is the largest number`)
  }
  else if (num2 > num1){
    console.log(`${num2} the largest number`)
  }
  else{
    console.log(`${num1} is equal to ${num2}`)
  }
}

findLargest(21,45) //"45 the largest number"
findLargest(34,18) //"34 is the largest number"
findLargest(41,41) //"41 is equal to 41"

// 4) Check if a triangle is equilateral, scalene, or isosceles

function findTriangleType(side1, side2, side3) {

  if((side1 == side2) && (side1 == side3)){
    console.log(`Equilateral triangle.`)
  }
  else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
    console.log(`Isosceles triangle.`)
  }
  else{
    console.log(`Scalene triangle.`)
  }
}

findTriangleType(12,12,12) //"Equilateral triangle."
findTriangleType(20,20,31) //"Isosceles triangle."
findTriangleType(5,4,3) //"Scalene triangle."

// 5) Find the a number is present in given range

function checkInRange(num, start, end) {

  if(num >= start && num <= end){
    console.log(`${num} is between the range ${start} and ${end}`)
  }
  else{
    console.log(`${num} is outside the range ${start} and ${end}`)    
  }
}

checkInRange(15,11,30) //"15 is between the range 11 and 30"
checkInRange(20,34,51) //"20 is outside the range 34 and 51"

// 6)Perform arithmetic operations on two numbers

function evalNumbers(num1, num2, op) {

  if(op == "add"){
    console.log(`Sum of ${num1} and ${num2} is ${num1+num2}`)
  }
  else if(op == "subtract"){
    console.log(`Difference of ${num1} and ${num2} is ${num1-num2}`)
  }
  else if(op == "multiply"){
    console.log(`Product of ${num1} and ${num2} is ${num1*num2}`)
  }
  else if(op == "divide"){
    console.log(`Division of ${num1} and ${num2} is ${num1/num2}`)
  }
  else if(op == "modulus"){
    console.log(`Modulus of ${num1} and ${num2} is ${num1%num2}`)
  }
  else{
     console.log(`${op} is an invalid operation`)    
  }
}

evalNumbers(15,10,"add") //"Sum of 15 and 10 is 25"
evalNumbers(20,8,"subtract") //"Difference of 20 and 8 is 12"
evalNumbers(12,4,"multiply") //"Product of 12 and 4 is 48"
evalNumbers(28,7,"divide") //"Division of 28 and 7 is 4"
evalNumbers(22,3,"modulus") //"Modulus of 22 and 3 is 1"
evalNumbers(31,3,"square") //"square is an invalid operation"

// 7) Find check if a year is leap year or not

function checkLeapYear(year) {

  if(((year%4 == 0)&&(year%100 != 0))||(year%400 == 0)){
    console.log(`Year ${year} is a leap year`);
  }
  else{
    console.log(`Year ${year} is not a leap year`);
    }
 }

checkLeapYear(2012) //"Year 2012 is a leap year"
checkLeapYear(1900) //"Year 1900 is not a leap year"
checkLeapYear(2000) //"Year 2000 is a leap year"
checkLeapYear(2011) //"Year 2011 is not a leap year"

// 8) Find the grade for input marks

function findGrade(name, marks) {

  if(marks >= 90 && marks <= 100){
    console.log(`${name} you have received S grade`)
  }
  else if(marks >= 80 && marks < 90){
    console.log(`${name} you have received A grade`)
  }
  else if(marks >= 70 && marks < 80){
    console.log(`${name} you have received B grade`)
  }
  else if(marks >= 60 && marks < 70){
    console.log(`${name} you have received C grade`)
  }
  else if(marks >= 50 && marks < 60){
    console.log(`${name} you have received D grade`)
  }
  else if(marks >= 40 && marks < 50){
    console.log(`${name} you have received E grade`)
  }
  else if(marks >= 0 && marks <40){
    console.log(`${name} you have Failed`)
  }
  else{
    console.log(`Invalid marks of ${marks}`)
  }
}

findGrade("John Doe", 91) //"John Doe you have received S grade"
findGrade("John Doe", 85) //"John Doe you have received A grade"
findGrade("John Doe", 73) //"John Doe you have received B grade"
findGrade("John Doe", 53) //"John Doe you have received D grade"
findGrade("John Doe", 20) //"John Doe you have Failed"
findGrade("John Doe", 120) //"Invalid marks of 120"

// 9). Find number of days in a given month

function isLeapYear(year){

  return (((year%4 == 0)&&(year%100 != 0))||(year%400 == 0));
}

function findDaysInMonth(month, year) {

  if(month < 1 || month > 12){
    console.log(`Invalid Month of value ${month}`)
    return;
  }

  if(month ==2){
    if(isLeapYear(year)){
       console.log(`The Month has 29 days`)    
    }
    else{
       console.log(`The Month has 28 days`)    
    }
  }
  else if(month == 4 || month == 6 || month == 9 || month== 11){
     console.log(`The Month has 30 days`)    
  }
  else{
     console.log(`The Month has 31 days`)
  }
}

findDaysInMonth(2, 2012) //"The Month has 29 days"
findDaysInMonth(2, 2013) //"The Month has 28 days"
findDaysInMonth(4, 2012) //"The Month has 30 days'
findDaysInMonth(10, 2013) //"The Month has 31 days"

// 10)ForEach:-The forEach() method calls a function and iterates over the elements of an array. 
// The forEach() method can also be used on Maps and Sets.
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.


// 10)Take an array with string data types then it reverse it?
var fruits = ["apple", "grape", "orange"];
var reversedFruits = fruits.reverse();

console.log(fruits); 
 



// 11)creating a markshit grade using if else ?
const score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}





// 12)checks the length of a user input and outputs a message based on the length. If the length is greater than or equal to 8 characters, 
// it logs "Valid input." Otherwise, it logs "Input must be at least 8 characters long

const userInput = "password123";

if (userInput.length >= 8) {
  console.log("Valid input.");
} else {
  console.log("Input must be at least 8 characters long.");
}

// 13)checks whether a given number falls within a specified range defined by lowerLimit and upperLimit?
const number = 75;
const lowerLimit = 50;
const upperLimit = 100;

if (number >= lowerLimit && number <= upperLimit) {
  console.log("The number is within the range.");
} else {
  console.log("The number is outside the range.");
}


/*14)What is the use of the isNaN function?

 The number isNan function in JavaScript is used to determine whether the passed value is NaN (Not a number) and is of the type 
“Number”. In JavaScript, the value NaN is considered a type of number. It returns true if the argument is not a number, else it returns false.



15) What is the ‘this’ keyword in JavaScript?

 Functions in JavaScript are essential objects. Like objects, they can be assigned to variables, passed to other functions, and returned 
from functions. And much like objects, they have their own properties. ‘this’ stores the current execution context of the JavaScript program.
Thus, when it is used inside a function, the value of ‘this’ will change depending on how the function is defined, how it is invoked, 
and the default execution context.


16)What do you mean by NULL in JavaScript?

The NULL value represents the no value or no object. It can be called an empty value/object.
*/


// 17)How to find the length of an array?
var myArray = [1, 2, 3, 4, 5];
console.log(myArray.length);


// 18)How to access elements in an array by index?
// Copy code
var myArray = ["apple", "banana", "orange"];
console.log(myArray[0]); 
console.log(myArray[1]); 
console.log(myArray[2]); 


// 19)How to iterate over an array using a for loop?

var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// 20)How to check if an element exists in an array?

var myArray = [1, 2, 3, 4, 5];
var element = 3;
if (myArray.includes(element)) {
  console.log("Element found in the array.");
} else {
  console.log("Element not found in the array.");
}

// 21)How to check if all elements in an array satisfy a condition?
var numbers = [10, 20, 30, 40, 50];
var allEven = numbers.every(function(num) {
  return num % 2 === 0;
});
if (allEven) {
  console.log("All elements are even.");
} else {
  console.log("Not all elements are even.");
}

// 22)How to count the occurrences of each element in an array?
var fruits = ["apple", "banana", "apple", "orange", "banana"];
var count = {};
fruits.forEach(function(fruit) {
  count[fruit] = (count[fruit] || 0) + 1;
});
console.log(count)

// 23)How to convert an array to a string?
var myArray = [1, 2, 3];
var str = myArray.join(",");
console.log(str);

// 24)How to check if two arrays are equal?
var array1 = [1, 2, 3];
var array2 = [1, 2, 3];
var equal = JSON.stringify(array1) === JSON.stringify(array2);
if (equal) {
  console.log("The arrays are equal.");
} else {
  console.log("The arrays are not equal.");
}

// 25)How to sort an array in ascending order?
var myArray = [4, 2, 1, 3, 5];
myArray.sort(function(a, b) {
  return a - b;
});
console.log(myArray);


// 26)How to find the maximum and minimum values in an array?
var numbers = [5, 2, 9, 1, 7];
var max = Math.max(...numbers);
var min = Math.min(...numbers);
console.log("Maximum value: " + max); 
console.log("Minimum value: " + min); 

// 27)toLowerCase(): Converts a string to lowercase.?
var myString = "WORLD";
console.log(myString.toLowerCase());

// 28)indexOf(substring): Returns the index of the first occurrence of a substring in a string.?

var myString = "Hello, World!";
console.log(myString.indexOf("World"))


// 29)slice(start, end): Extracts a portion of a string based on the specified start and end indices.

var myString = "Hello, World!";
console.log(myString.slice(7, 12));


// 30)charAt(index): Returns the character at the specified index in a string.?
var myString = "Hello";
console.log(myString.charAt(1));


// 31)making an asynchronous HTTP request (AJAX request) 
// using JavaScript, specifically utilizing the fetch function and async/await syntax:

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log('Request failed with status:', response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

fetchData();


// 32) Making a POST request with JSON data?

async function postData() {
  try {
    const response = await fetch('https://api.example.com/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: 'John', age: 30 }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log('Request failed with status:', response.status);
    }
  } catch (error) {
    console.log('Error:', error);
  }
}

postData();


// 33)promise example?

function fetchData() {
  return new Promise(function(resolve, reject) {
    // Simulating an asynchronous operation (e.g., API call, database query)
    setTimeout(function() {
      const data = { id: 1, name: 'John Doe', email: 'johndoe@example.com' };
      if (data) {
        resolve(data); // Promise is fulfilled with the data
      } else {
        reject('Data not found'); // Promise is rejected with an error message
      }
    }, 2000); // Simulating a 2-second delay
  });
}

// Consuming the promise
fetchData()
  .then(function(data) {
    console.log('Data:', data);
  })
  .catch(function(error) {
    console.log('Error:', error);
  });


/*11)What is Function in js:-A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it

12)Function Parameter:-JavaScript function parameters are a core part of a function definition. However,
 many JavaScript programmers confuse them with JavaScript function arguments. Our post sets
 aside the two by giving a clear description of each one and you will even learn how to use them.*/

function Name(paramet1, paramet2, paramet3,paramet4) {
    // Statements
}

/*13)Rest Parameter:- JavaScript Rest Parameters provides us with a way to declare a function which can take indefinite number
 of arguments, which are available as an array. In simple language, we can define JavaScript function with Rest Parameters 
which doesn't have a fixed number of parameters and can take any numbers of arguments when it is called.*/

function func_name(a, b, ...restArgs) {
    // statements
}

/*14)Spread Operator:-The spread operator ... is used to expand or spread an iterable or an array*/
const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack

// 15) copy an array and add some element on the  coppied array with out making any effect on first

const arrValueP = ['My', 'name', 'is', 'Jack'];
let arrValuex= arrValueP
arrValuex.push("akash")
console.log(arrValueP);//[ 'My', 'name', 'is', 'Jack', 'akash' ]
console.log(arrValuex);//[ 'My', 'name', 'is', 'Jack', 'akash' ]

// its affecting 2 array to avoid this 

let arrValuex1=[...arrValueP,'berg']
console.log(arrValuex1);

// 