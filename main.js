/* 
👉 Write your kata here!

SUMMER VEGETABLE CALENDAR

In this kata, you are given an array of objects.
The array 'vegatables' contains the names of the vegetables seeds planted in the greenhouse,
the day of the month that each seed is planted and the name of the month.

The vegetable seeds must be planted from April until June and must be moved outside exactly three weeks after the seeds are planted.

Write a function 'vegCalendar' that returns:

- A string with the name of the plant and the date it needs to be moved outside. For example, if a cucumber is planted on the 15th April, 
the function should return "The cucumber needs to be moved outside on 6 May".
- A string with the message "Not the right month to plant summer vegetables! Try again from April until June." if the month entered is any other month from January until March and from July until December.
- A string with the message "Please enter a valid month." if the month entered is an irrelevant word.
- A string with the message "Please enter a valid day." if the days entered are less than 0 or more than 31.
- A string with the message "This month only has 30 days!" if the days entered for 30-day months are 31.

*/

//👉 Write the function your CodeWarriors will start with below here:

function vegCalendar(vegetables) {
    let vegetables = [{ name: ``, day: 0, month: `` }];
    let currentMonthDays = 0;
    let nextMonthDays = 0;
    for (let i=0; i<vegetables.length; i++) {
        if (vegetables[i].month === 'January' || vegetables[i].month === 'February' || vegetables[i].month === 'March' || vegetables[i].month === 'July' || vegetables[i].month === 'August' || vegetables[i].month === 'September' || vegetables[i].month === 'October' || vegetables[i].month === 'November' || vegetables[i].month === 'December') {
            return `Not the right month to plant summer vegetables! Try again from April until June.`;
        }
        else if (vegetables[i].month === 'April' || vegetables[i].month === 'May' || vegetables[i].month === 'June') {
            if (vegetables[i].day > 0 && vegetables.day <= 31) {
             if (vegetables[i].month === 'April' && vegetables[i].day <= 9 ) {
                    return `The ${vegetables[i].name} needs to be moved outside on ${vegetables[i].day + 21} ${vegetables[i].month}.`
                }
                if (vegetables[i].month === 'April' && vegetables[i].day > 9 ) {
                    currentMonthDays = 30 - vegetables[i].day;
                    nextMonthDays = 31 - currentMonthDays;
                    return `The ${vegetables[i].name} needs to be moved outside on ${currentMonthDays + nextMonthDays} May.`
                }
                if (vegetables[i].month === 'May' && vegetables[i].day <= 10 ) {
                    return `The ${vegetables[i].name} needs to be moved outside on ${vegetables[i].day + 21} ${vegetables[i].month}.`
                }
                if (vegetables[i].month === 'May' && vegetables[i].day > 10 ) {
                    if (vegetables[i].day === 31) {
                        return `${vegetables[i].month} only has 30 days!`
                    }
                    else {
                        currentMonthDays = 31 - vegetables[i].day;
                        nextMonthDays = 30 - currentMonthDays;
                        return `The ${vegetables[i].name} needs to be moved outside on ${currentMonthDays + nextMonthDays} June.`
                    }
                }
                if (vegetables[i].month === 'June' && vegetables[i].day <= 9 ) {
                    return `The ${vegetables[i].name} needs to be moved outside on ${vegetables[i].day + 21} ${vegetables[i].month}.`
                }
                if (vegetables[i].month === 'June' && vegetables[i].day > 9 ) {
                    currentMonthDays = 30 - vegetables[i].day;
                    nextMonthDays = 31 - currentMonthDays;
                    return `The ${vegetables[i].name} needs to be moved outside on ${currentMonthDays + nextMonthDays} July.`
                }
            }
            else {
                return `Please enter a valid day.`
            }
            
        }
        else {
            return `Please enter a valid month.`
        }
    }
}