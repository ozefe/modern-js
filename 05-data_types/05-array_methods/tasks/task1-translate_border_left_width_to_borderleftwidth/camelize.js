function camelize(str) {
    let words = str.split("-");

    let uppercasedWords = words.map((word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    );

    return uppercasedWords.join("");
}

alert(camelize("background-color") === "backgroundColor");
alert(camelize("list-style-image") === "listStyleImage");
alert(camelize("-webkit-transition") === "WebkitTransition");
