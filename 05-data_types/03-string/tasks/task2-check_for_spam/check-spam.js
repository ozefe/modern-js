function checkSpam(str) {
    return (
        str.toLowerCase().includes("viagra") ||
        str.toLowerCase().includes("xxx")
    );
}

alert(checkSpam("buy ViAgRA now") == true);
alert(checkSpam("free xxxxx") == true);
alert(checkSpam("innocent rabbit") == false);
