/* 
👉 Write your kata here!

SUMMER VEGETABLE CALENDAR

In this kata, you are given an array of objects.
The array 'vegatables' contains the names of the vegetables seeds planted in the greenhouse,
the day of the month that each seed is planted and the name of the month.

The vegetable seeds must be planted from April until June and must be moved outside exactly three weeks after the seeds are planted.

Write a function 'vegCalendar' that returns:

- A string with the name of the plant and the date it needs to be moved outside. For example, if a cucumber is planted on the 15th April, 
the function should return "The cucumber needs to be moved outside on the 6th May.
- A string with the message "Not the right month to plant summer vegetables! Try again from April until June." if the month entered is any other month from January until March and from July until December.

Note that you need to take the number of days each month has into consideration.

*/

//👉 Write the function your CodeWarriors will start with below here:

function vegCalendar(vegetables) {
    let vegetables = [{ name: ``, day: 0, month: `` }];
    for (let i=0; i<vegetables.length; i++) {
        if (vegetables[i].month === 'January' || vegetables[i].month === 'February' || vegetables[i].month === 'September' || vegetables[i].month === 'October' || vegetables[i].month === 'November' || vegetables[i].month === 'December') {
            return `Not the right month to plant summer vegetables! Try again from April until June.`;
        }
        else if (vegetables[i].month === 'March' || vegetables[i].month === 'April' || vegetables[i].month === 'May' || vegetables[i].month === 'June' || vegetables[i].month === 'July' ||vegetables[i].month === 'August') {
            
        }
    }
}