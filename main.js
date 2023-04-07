/* 
👉 Write your kata here!

APRIL VEGETABLE CALENDAR

In this kata, you are given an object that contains the vegatable seeds you plant in April
(since it's a great month to start planting summer vegetables!).
The 'vegatable' object contains the name of the vegetable (string) planted in the greenhouse
and the day of the month (number) that each vegetable is planted.

The vegetable seeds must be moved outside exactly three weeks after the seeds are planted.

Write a function 'aprilVeg' that returns:
- A string with the name of the plant, the date it was planted and the date it needs to be moved outside.
For example, if a cucumber is planted on the 15th April, the function should return "The cucumber planted on April 15 needs to be moved outside on May 6."
- A string with the message "Invalid day for the month of April." if the day of the month entered isn't between 1 and 30.

*/

//👉 Write the function your CodeWarriors will start with below here:

// PLAN
// Declare an empty string (that will be what the function returns)
// If the day is from 1 to 30, add to the new string
// If the day isn't between 1 to 30, return the string "Invalid day for the month of April."
// How to create the string for the moving day:
// Get the name of the vegetable with the name property - vegetable.name
// Get the day it was planted with the day property - vegetable.day
// Get the day it must be moved outside (three weeks - 21 days after it's planted)
// If the vegetable is planted until the 9th of April, it must be moved before April finishes, so we add 21 days from the planting day 
// If the vegetable is planted after the 9th of April, it must be moved in May, so we need to calculate how many days from the plantind day until the end of April and how many more days from the 1st of May until we reach the three weeks
// Declare the variable currentMonthDays that is the number of days from the planting day until the end (30th) of April
// Declare the variable nextMonthDays that is the number of days left for May (three weeks minus currentMonthDays)
// The variable nextMonthDays gives us the May day we need
// Fill the new string with the relevant information and return it

export function aprilVeg(vegetable) { // Declare the function aprilVeg that takes an object as a parameter
    let currentMonthDays = 0; // Declare the variable currentMonthDays that is the number of days from the planting day until the end (30th) of April
    let nextMonthDays = 0; // Declare the variable nextMonthDays that is the number of days left for May (three weeks minus currentMonthDays)
    if (vegetable.day > 0 && vegetable.day <= 30) { // If the day is from 1 to 30, push the string with the moving day into the array
        if (vegetable.day <= 9) { // If the vegetable is planted until the 9th of April, it must be moved before April finishes, so we add 21 days from the planting day 
            return `The ${vegetable.name} planted on April ${vegetable.day} needs to be moved outside on April ${vegetable.day + 21}.`; // Fill the new string with the relevant information 
        }
        else if (vegetable.day > 9) { // If the vegetable is planted after the 9th of April, it must be moved in May, so we need to calculate how many days from the plantind day until the end of April and how many more days from the 1st of May until we reach the three weeks
            currentMonthDays = 30 - vegetable.day; // the number of days from the planting day until the end (30th) of April
            nextMonthDays = 21 - currentMonthDays; // the number of days left for May (three weeks minus currentMonthDays)
            return `The ${vegetable.name} planted on April ${vegetable.day} needs to be moved outside on May ${nextMonthDays}.`; // Fill the new string with the relevant information 
        }
    }
    else {
        return `Invalid day for the month of April.`; // If the day isn't between 1 to 30, push the string "Invalid day for the month of April." into the array
    }
}