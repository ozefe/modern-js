// The method `Date.parse(str)` can read a date from a string. The string format
// should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:
// - YYYY-MM-DD is the date: year-month-day.
// - The character "T" is used as the delimiter.
// - HH:mm:ss.sss is the time: hours, minutes, seconds and milliseconds.
// - The optional "Z" part denotes the time zone in the format +-hh:mm. A single
//   letter Z would mean UTC+0.
// Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

// The call to `Date.parse(str)` parses the string in the given format and
// returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the
// format is invalid, returns NaN.
let ms = Date.parse("2012-01-26T13:51:50.417-07:00");
alert(ms); // 1327611110417 (timestamp)

let date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));
alert(date);
