function getLocalDay(date) {
    let day = date.getDay();

    return day === 0 ? 7 : day;
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getLocalDay(date)); // tuesday, should show 2
