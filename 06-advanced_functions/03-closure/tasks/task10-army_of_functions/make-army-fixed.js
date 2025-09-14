function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            // create a shooter function,
            alert(i); // that should show its number
        };
        shooters.push(shooter); // and add it to the array
    }

    // ...and return the array of shooters
    return shooters;
}

let army = makeArmy();

army[0](); // 0
army[1](); // 1
army[2](); // 2
