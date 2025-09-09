let styles = ["Jazz", "Blues"];
alert(`Styles: ${styles}`);

styles.push("Rock-n-Roll");
alert(`Styles: ${styles}`);

styles[Math.floor(styles.length / 2)] = "Classics";
alert(`Styles: ${styles}`);

alert(`First value: ${styles.shift()}`);
alert(`Styles: ${styles}`);

styles.unshift("Rap", "Reggae");
alert(`Styles: ${styles}`);
