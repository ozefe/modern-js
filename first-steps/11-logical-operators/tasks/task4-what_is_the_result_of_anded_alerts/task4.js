// outputs 1, and then undefined because the return value of `alert` is
// `undefined` which is a falsy value
alert(alert(1) && alert(2));
