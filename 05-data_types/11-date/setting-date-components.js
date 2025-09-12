// Birthday of Brendan Eich, the creator of JavaScript and the person responsile
// for all this pain and suffering: July 4th, 1961
let birthday = new Date();

// setFullYear(year, [month], [date])
birthday.setFullYear(1961);

// setMonth(month, [date])
birthday.setMonth(6);

// setDate(date)
birthday.setDate(4);

// setHours(hour, [min], [sec], [ms])
birthday.setHours(13);

// setMinutes(min, [sec], [ms])
birthday.setMinutes(37);

// setSeconds(sec, [ms])
birthday.setSeconds(42);

// setMilliseconds(ms)
birthday.setMilliseconds(69);

// setTime(milliseconds): sets the whole date by milliseconds since
// 01.01.1970 UTC
// birthday.setTime(-268057337931);

alert(`Birthday of Satan: ${birthday}`);
