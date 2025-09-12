let getLastDayOfMonth = (year, month) => new Date(year, month + 1, 0).getDate();

alert(getLastDayOfMonth(2012, 1) === 29);
