/* 
👉 Write your kata here!

APRIL VEGETABLE CALENDAR

In this kata, you are given an array of objects that contains the vegatable seeds you plant in April
(since it's a great month to start planting summer vegetables!).
The array 'vegatables' contains the names of the vegetables (string) planted in the greenhouse
and the day of the month (number) that each vegetable is planted.

The vegetable seeds must be moved outside exactly three weeks after the seeds are planted.

Write a function 'aprilVeg' that returns a new array filled with strings for each planted vegetable:
- A string with the name of the plant, the date it was planted and the date it needs to be moved outside.
For example, if a cucumber is planted on the 15th April, the function should return "The cucumber planted on April 15 needs to be moved outside on May 6."
- A string with the message "Invalid day for the month of April." if the day of the month entered isn't between 1 and 30.

*/

//👉 Write the function your CodeWarriors will start with below here:

// PLAN
// Declare an empty array of objects with the properties name (string) and day (number)
// Declare an empty array of strings (that will be what the function returns)
// If the day is from 1 to 30, push the string with the moving day into the array
// If the day isn't between 1 to 30, push the string "Invalid day for the month of April." into the array
// How to create the string for the moving day:
// Loop through the object array
// Get the name of the vegetable with the name property - vegetables[i].name
// Get the day it was planted with the day property - vegetables[i].day
// Get the day it must be moved outside (three weeks - 21 days after it's planted)
// If the vegetable is planted until the 9th of April, it must be moved before April finishes, so we add 21 days from the planting day 
// If the vegetable is planted after the 9th of April, it must be moved in May, so we need to calculate how many days from the plantind day until the end of April and how many more days from the 1st of May until we reach the three weeks
// Declare the variable currentMonthDays that is the number of days from the planting day until the end (30th) of April
// Declare the variable nextMonthDays that is the number of days left for May (three weeks minus currentMonthDays)
// The variable nextMonthDays gives us the May day we need
// Every time we loop through the initial array and get all the information, fill the new array with the relevant strings

function aprilVeg(vegetables) {
    let vegetables = [{ name: ``, day: 0}]; // Declare an empty array of objects with the properties name (string) and day (number)
    let movingDays = [``]; // Declare an empty array of strings (that will be what the function returns)
    let currentMonthDays = 0; // Declare the variable currentMonthDays that is the number of days from the planting day until the end (30th) of April
    let nextMonthDays = 0; // Declare the variable nextMonthDays that is the number of days left for May (three weeks minus currentMonthDays)
    for (let i=0; i<vegetables.length; i++) { // Loop through the object array
        if (vegetables[i].day > 0 && vegetables[i] <= 30) { // If the day is from 1 to 30, push the string with the moving day into the array
            if (vegetables[i].day <= 9) { // If the vegetable is planted until the 9th of April, it must be moved before April finishes, so we add 21 days from the planting day 
                movingDays[i] = `The ${vegetables[i].name} planted on April ${vegetables[i].day} needs to be moved outside on April ${vegetables[i].day + 21}.`; // Every time we loop through the initial array and get all the information, fill the new array with the relevant strings
            }
            else if (vegetables[i].day <= 9) { // If the vegetable is planted after the 9th of April, it must be moved in May, so we need to calculate how many days from the plantind day until the end of April and how many more days from the 1st of May until we reach the three weeks
                currentMonthDays = 30 - vegetables[i].day; // the number of days from the planting day until the end (30th) of April
                nextMonthDays = 21 - currentMonthDays; // the number of days left for May (three weeks minus currentMonthDays)
                movingDays[i] = `The ${vegetables[i].name} planted on April ${vegetables[i].day} needs to be moved outside on May ${nextMonthDays}.`; // Every time we loop through the initial array and get all the information, fill the new array with the relevant strings
            }
        }
        else {
            movingDays[i] = "Invalid day for the month of April."; // If the day isn't between 1 to 30, push the string "Invalid day for the month of April." into the array
        }
    }
    return movingDays; // Return the new array with the days each vegetable needs to be moved
}
