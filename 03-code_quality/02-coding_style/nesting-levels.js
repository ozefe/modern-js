for (let i = 0; i < 10; i++) {
    if (cond) {
        // ... // <- one more nesting level
    }
}

for (let i = 0; i < 10; i++) {
    if (!cond) continue;
    //   ...  // <- no extra nesting level
}

function pow(x, n) {
    if (n < 0) {
        alert("Negative 'n' not supported");
    } else {
        let result = 1;

        for (let i = 0; i < n; i++) {
            result *= x;
        }

        return result;
    }
}

function pow(x, n) {
    if (n < 0) {
        alert("Negative 'n' not supported");
        return;
    }

    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}
