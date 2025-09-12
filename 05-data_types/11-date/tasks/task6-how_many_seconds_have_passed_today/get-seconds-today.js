function getSecondsToday() {
    let now = new Date();
    let seconds = 0;

    seconds += now.getHours() * 60 * 60;
    seconds += now.getMinutes() * 60;
    seconds += now.getSeconds();

    return seconds;
}

alert(`${getSecondsToday()} number of seconds have passed!`);
