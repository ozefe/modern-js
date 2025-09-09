function truncate(str, maxlength) {
    if (str.length <= maxlength) return str;

    return str.slice(0, maxlength - 1) + "…";
}

alert(
    truncate("What I'd like to tell on this topic is:", 20) ==
        "What I'd like to te…"
); // true
alert(truncate("Hi everyone!", 20) == "Hi everyone!"); // true
