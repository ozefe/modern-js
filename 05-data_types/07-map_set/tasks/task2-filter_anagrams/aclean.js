function aclean(arr) {
    let unique_anagrams = [];
    let unique_anagram_sorted = new Set();

    arr.forEach((anagram) => {
        // Sort the anagram by first converting it to an array and then sorting
        // it.
        let sorted_anagram = anagram.toLowerCase().split("").sort().toString();

        if (!unique_anagram_sorted.has(sorted_anagram)) {
            unique_anagram_sorted.add(sorted_anagram);
            unique_anagrams.push(anagram);
        }
    });

    return unique_anagrams;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"
