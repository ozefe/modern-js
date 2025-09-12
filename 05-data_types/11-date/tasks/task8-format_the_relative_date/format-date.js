function formatDate(date) {
    let now = new Date();

    let diffSeconds = (now - date) / 1000;
    if (diffSeconds < 1) {
        return "right now";
    } else if (diffSeconds < 60) {
        return `${diffSeconds} sec. ago`;
    } else if (diffSeconds < 60 * 60) {
        return `${diffSeconds / 60} min. ago`;
    } else {
        let [year, month, day, hours, minutes] = [
            String(date.getFullYear()),
            "0" + (date.getMonth() + 1),
            "0" + date.getDate(),
            "0" + date.getHours(),
            "0" + date.getMinutes(),
        ].map((value) => value.slice(-2));

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
}

alert(formatDate(new Date(new Date() - 1))); // "right now"
alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 sec. ago"
alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 min. ago"

// yesterday's date like 11.09.25 19:20
alert(formatDate(new Date(new Date() - 86400 * 1000)));
