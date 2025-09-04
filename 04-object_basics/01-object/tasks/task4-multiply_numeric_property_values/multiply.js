let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

// before the call
for (let prop in menu) {
    alert(`${prop}: ${menu[prop]}`);
}

// after the call
multiplyNumeric(menu);

for (let prop in menu) {
    alert(`${prop}: ${menu[prop]}`);
}

function multiplyNumeric(obj) {
    for (let prop in obj) {
        if (typeof obj[prop] === "number") obj[prop] *= 2;
    }
}
