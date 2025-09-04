function isEmpty(obj) {
    for (let prop in obj) return false;

    return true;
}

let schedule = {};
alert(`Is schedule empty: ${isEmpty(schedule)}`); // true

schedule["8:30"] = "get up";
alert(`Is schedule empty: ${isEmpty(schedule)}`); // false
