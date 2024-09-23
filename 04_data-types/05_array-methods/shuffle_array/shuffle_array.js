let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

function shuffle(array) {
  array_copy = array.slice();
  array.length = 0;

  for (let item of array_copy) {
    let rand;
    do {
      rand = Math.floor(Math.random() * array_copy.length);
    } while (isFinite(array[rand]));

    array[rand] = item;
  }
}

let count = {
  123: 0,
  132: 0,
  213: 0,
  231: 0,
  321: 0,
  312: 0,
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join("")]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}
