/* 
👉 Write your kata here!

APRIL VEGETABLE CALENDAR

In this kata, you are given an array of objects that contains the vegatable seeds you plant in April
(since it's a great month to start planting summer vegetables!).
The array 'vegatables' contains the names of the vegetables (string) planted in the greenhouse
and the day of the month (number) that each vegetable is planted.

The vegetable seeds must be moved outside exactly three weeks after the seeds are planted.

Write a function 'plantedVeg' that returns a new array filled with strings for each planted vegetable:
- A string with the name of the plant, the date it was planted and the date it needs to be moved outside.
For example, if a cucumber is planted on the 15th April, the function should return "The cucumber planted on April 15 needs to be moved outside on May 6".
- A string with the message "Please enter a valid day for the month of April." if the day of the month entered isn't between 1 and 30.

*/

//👉 Write the function your CodeWarriors will start with below here:

// Declare an empty array of objects with the properties name (string) and day (number)
// 

function aprilVeg(vegetables) {
    let vegetables = [{ name: ``, day: 0}];
    let currentMonthDays = 0;
    let nextMonthDays = 0;
}
