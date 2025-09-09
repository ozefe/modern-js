function random(min, max) {
    let float_part = Math.random();

    let integer_part;
    do {
        integer_part = Math.trunc(Math.random() * 10);
    } while (integer_part < min || integer_part >= max);

    return integer_part + float_part;
}

alert(`Custom random: ${random(1, 5)}`); // 1.2345623452
alert(`Custom random: ${random(1, 5)}`); // 3.7894332423
alert(`Custom random: ${random(1, 5)}`); // 4.3435234525

function properRandom(min, max) {
    // If we multiply a random number from 0..1 by max-min, then the interval
    // of possible values increases 0..1 to 0..max-min.
    // Then if we add min, the possible interval becomes from min to max.
    return min + Math.random() * (max - min);
}

alert(`Proper random: ${properRandom(1, 5)}`);
alert(`Proper random: ${properRandom(1, 5)}`);
alert(`Proper random: ${properRandom(1, 5)}`);
