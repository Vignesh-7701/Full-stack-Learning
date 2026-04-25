/*
JAVASCRIPT 

Date object represents date + time together.
Internally it stores time as milliseconds since:
1 Jan 1970 UTC (Unix Epoch).
*/



//1. CREATE DATE OBJECT

// current date and time
let now = new Date();

console.log("Current Date:", now);

// specific date (year, month, date, hours, minutes)
let date1 = new Date(2012, 1, 20, 3, 12);

console.log("Custom Date:", date1);

// NOTE
// month starts from 0
// 0 = January
// 1 = February



//2. CREATE DATE FROM STRING

let date2 = new Date("2012-02-20T03:12");

console.log("Date from string:", date2);



//3. CREATE DATE FROM TIMESTAMP

// milliseconds from Jan 1 1970

let timestampDate = new Date(0);

console.log("Epoch date:", timestampDate);

let laterDate = new Date(24 * 3600 * 1000);

console.log("After 1 day from epoch:", laterDate);



//4. GET DATE COMPONENTS

let sampleDate = new Date();

console.log("Year:", sampleDate.getFullYear());
console.log("Month:", sampleDate.getMonth()); 
console.log("Date:", sampleDate.getDate());
console.log("Day:", sampleDate.getDay());

console.log("Hours:", sampleDate.getHours());
console.log("Minutes:", sampleDate.getMinutes());
console.log("Seconds:", sampleDate.getSeconds());
console.log("Milliseconds:", sampleDate.getMilliseconds());



//5. SET DATE COMPONENTS

let modifyDate = new Date();

modifyDate.setFullYear(2025);
modifyDate.setMonth(5);
modifyDate.setDate(15);

modifyDate.setHours(10);
modifyDate.setMinutes(30);
modifyDate.setSeconds(45);

console.log("Modified Date:", modifyDate.toLocaleTimeString());
//toLocaleTimeString() - use this for local time zone.


//6. AUTO CORRECTION FEATURE

/*
Date automatically fixes out-of-range values
*/

let autoDate = new Date(2013, 0, 32);

console.log("Auto corrected:", autoDate);
// becomes Feb 1 2013

/*
Another example
*/

let leapExample = new Date(2016, 1, 28);

leapExample.setDate(leapExample.getDate() + 2);

console.log("After 2 days:", leapExample);



//7. SETTING ZERO OR NEGATIVE VALUES

let negativeExample = new Date(2016, 0, 2);

negativeExample.setDate(1);

console.log("First day:", negativeExample.toString());

negativeExample.setDate(0);

console.log("Last day previous month:", negativeExample.toString());

// toString() - actually give date as a string .


//8. DATE TO NUMBER (TIMESTAMP)

let dateObj = new Date();

console.log("Timestamp using +date:", +dateObj);

console.log("Timestamp using getTime:", dateObj.getTime());



//9. DATE DIFFERENCE

let start = new Date();

// simulate heavy work
for (let i = 0; i < 100000; i++) {
    let x = i * i * i;
}

let end = new Date();

console.log("Time taken:", end - start, "ms");



//10. DATE.NOW()

/*
Date.now() returns timestamp directly
without creating Date object
*/

let start2 = Date.now();

for (let i = 0; i < 100000; i++) {
    let x = i * i * i;
}

let end2 = Date.now();

console.log("Time taken using Date.now:", end2 - start2, "ms");



//11. DATE.PARSE

/*
Converts date string to timestamp
*/

let parsedTime = Date.parse("2012-01-26T13:51:50.417-07:00");

console.log("Parsed timestamp:", parsedTime);

let parsedDate = new Date(parsedTime);

console.log("Parsed Date object:", parsedDate);



//12. PRACTICE – CREATE DATE

let practiceDate = new Date(2012, 1, 20, 3, 12);

console.log("Practice date:", practiceDate);



//13. PRACTICE – GET WEEKDAY

function getWeekDay(date) {

    let days = ['SU','MO','TU','WE','TH','FR','SA'];

    return days[date.getDay()];

}

let testDate = new Date(2014, 0, 3);

console.log("Weekday:", getWeekDay(testDate));



//14. EUROPEAN WEEKDAY

function getLocalDay(date) {

    let day = date.getDay();

    if (day === 0) {
        day = 7;
    }

    return day;
}

let localTest = new Date(2012, 0, 3);

console.log("European weekday:", getLocalDay(localTest));



/*
REVISION SUMMARY

Date object stores time in milliseconds since
Jan 1 1970 (Unix Epoch)

CREATE
new Date()
new Date(year, month, date, hour, minute)
new Date(timestamp)
new Date(string)

GET METHODS
getFullYear()
getMonth()
getDate()
getDay()
getHours()
getMinutes()
getSeconds()

SET METHODS
setFullYear()
setMonth()
setDate()
setHours()
setMinutes()
setSeconds()

IMPORTANT
Month starts from 0
Sunday = 0 in getDay()

UTILITIES
Date.now()
Date.parse()
date.getTime()

DATE MATH
date2 - date1 → difference in milliseconds
*/