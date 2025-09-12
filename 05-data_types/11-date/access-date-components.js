let date = new Date();

alert(`Full date and time: ${date}`); // 2025
alert(`Full year: ${date.getFullYear()}`); // 2025
alert(`Month: ${date.getMonth()}`); // 8 (September), 0-indexed
alert(`Day of the month: ${date.getDate()}`); // 12
alert(
    `Time: ` +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds() +
        "." +
        date.getMilliseconds()
); // Current time
// 5 (Friday), 0-indexed, first day is always Sunday, which is stupid
alert(`Day of the week: ${date.getDay()}`);
alert(`UTC Hours: ${date.getUTCHours()}`); // Hours for the time zone UTC+0
alert(`Timestamp: ${date.getTime()}`); // Milliseconds since January 1st, 1970
// difference between UTC and local timezone in minutes, -180 for GMT+3
alert(`Timezone offset: ${date.getTimezoneOffset()} minutes`);
