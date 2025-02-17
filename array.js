
/*1. Declare an array
          Declare an array with 5 elements containing fruits
          console log the 3rd index element
          change the value of the 2nd index element to jambura
          console log the final array  */

let fruits = ["apple", "banana", "cherry", "mango", "orange"];


console.log(fruits[3]);


fruits[2] = "jambura";


console.log(fruits);

/*  2. Add or remove elements
            Declare an array of 3 tourist destinations
            Add a new tourist destination to your tourist array
            Add two more to your array
            Remove the last tourist destination you have added
            display the final array as output */


let touristDestinations = ["Paris", "New York", "Thailand"];

console.log(touristDestinations.push("Australia"));

touristDestinations.push("London", "Pakistan");

touristDestinations.pop();

console.log(touristDestinations);

/* 3. Checking Array Membership with ‘includes’
Instructions:
               Create an array of books containing different book.
               Use the includes method to check if the array contains a javascript book.
               Print a message to the console indicating whether the element is present in the array or not. */

    let books = ["BanglaBook", "EnglishBook", "IslamBook", "PhysicsBook", "JavascriptBook"];

    console.log(books.includes("JavascriptBook"));

    
               

    
/* 4. Checking if it's an Array
Instructions:
               Create different variables, each containing either an array or a non-array value.
               Now use isArray to check if each variable is an array.
               Print a message to the console indicating whether each variable is an array or not.*/

let fruits = ["apple", "banana", "cherry"]; 
let naMe = "kulsumDiti";                          
let numbers = [1, 2, 3, 4, 5];              
let age = 23;                               
let isActive = true;                        


console.log(Array.isArray(fruits));   
console.log(Array.isArray(naMe));       
console.log(Array.isArray(numbers)); 
console.log(Array.isArray(age));         
console.log(Array.isArray(isActive)); 

               
/*5. Combining Arrays
Instructions:
          Create two arrays of your choice.
          Use the concat method to combine the two arrays into a new array.
          Print both the original arrays and the combined array using console.log().*/


let fruits = ["apple", "banana", "cherry"];
let vegetables = ["carrot", "tomato", "potato"];

let combinedArray = fruits.concat(vegetables);

console.log(fruits);
console.log(vegetables);
console.log(combinedArray);

