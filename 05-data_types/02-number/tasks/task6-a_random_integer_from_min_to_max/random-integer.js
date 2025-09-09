function randomInteger(min, max) {
    return Math.trunc(min + Math.random() * max);
}

alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5
