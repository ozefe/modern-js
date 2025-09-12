// We can set out-of-range values, and it will auto-adjust itself:
let Jan32_2013 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
alert(Jan32_2013); // ...is 1st Feb 2013!

// We need to increase the date "28 Feb 2016" by 2 days. It may be "2 Mar" or
// "1 Mar" in case of a leap-year. We don't need to think about it. Just add 2
// days. The Date object will do the rest:
let Feb28_2016 = new Date(2016, 1, 28);
Feb28_2016.setDate(Feb28_2016.getDate() + 2);

alert(Feb28_2016); // 1 Mar 2016

// 70 seconds after now:
let now = new Date();
now.setSeconds(now.getSeconds() + 70);
alert(`70 seconds after now: ${now}`); // shows the correct date

// We can also set zero or even negative values:
let date = new Date(2016, 0, 2); // 2 Jan 2016

date.setDate(1); // set day 1 of month
alert(date);

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
alert(date); // 31 Dec 2015
