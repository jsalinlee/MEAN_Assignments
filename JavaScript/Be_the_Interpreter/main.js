// Problem 1
var first_variable
function firstFunc() {
    first_variable = "Not anymore!!!";
    console.log(first_variable);
}
console.log(first_variable);            // log undefined since first_variable is not set to anything yet
first_variable = "Yipee I was first!";
console.log(first_variable);            // lot "Yipee I was first!" because firstFunc() is never called.

// Output:
//undefined
//Yipee I was first!

// Problem 2
var food;
function eat() {
    var food
    food = "half-chicken";
    console.log(food);
    food = "gone";       // CAREFUL!
    console.log(food);
}
food = "Chicken"        // food set equal to "Chicken"
eat();                  // runs eat() which logs "half-chicken" then "gone"
console.log(food);      // logs "Chicken" because eat() changes the local variable "food" not the global

// Output:
//half-chicken
//gone
//Chicken

// Problem 3
var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";      // lastFunc() is never called, so new_word is set to "NEW!"
console.log(new_word);  // logs "NEW!"

// Output:
//NEW!
