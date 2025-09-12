// new Date()
let now = new Date();
alert(`Current date and time: ${now}`); // shows current date/time

// new Date(milliseconds)
// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
alert(`January 1st 1970: ${Jan01_1970}`);

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
alert(`January 2nd 1970: ${Jan02_1970}`);

// Dates before 01.01.1970 have negative timestamps:
// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);
alert(`December 31st 1969: ${Dec31_1969}`);

// new Date(datestring)
// If there is a single argument, and it's a string, then it is parsed
// automatically. The algorithm is the same as `Date.parse` uses.
let parsedDate = new Date("2017-01-26");
alert(`Parsed date: ${parsedDate}`);
// The time is not set, so it's assumed to be midnight GMT and is adjusted
// according to the timezone the code is run in. So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

// new Date(year, month, date, hours, minutes, seconds, ms)
// Create the date with the given components in the local time zone. Only the
// first two arguments are obligatory.
// - The `year` should have 4 digits. For compatibility, 2 digits are also
//   accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always
//   using 4 digits is strongly encouraged.
// - The `month` count starts with 0 (Jan), up to 11 (Dec).
// - The `date` parameter is actually the day of month, if absent then 1 is
//   assumed.
// - If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
alert(new Date(2011, 0, 1, 0, 0, 0, 0)); // 1 Jan 2011, 00:00:00
alert(new Date(2011, 0, 1)); // the same, hours etc are 0 by default
