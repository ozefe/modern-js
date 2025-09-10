let arr = [5, 2, 1, -10, 8];

// sort it in decreasing order
arr.sort((a, b) => a - b).reverse();
alert(arr); // 8, 5, 2, 1, -10

// or...
arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert(arr); // 8, 5, 2, 1, -10
