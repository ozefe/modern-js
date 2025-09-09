function getMaxSubSum(arr) {
    // Kadane's Algorithm:
    // At each step, we have two choices:
    //   1. Continue the current path: Add the number we're currently at to the
    //      `currentSum`.
    //   2. Start a new path: If the path we're on has a negative sum, it's
    //      better to forget about it and start a fresh path beginning with the
    //      current number.

    let bestSum = 0; // Maximum sum found anywhere in the array
    let currentSum = 0; // Sum of best possible subarray up to current pos.

    for (let num of arr) {
        currentSum += num;

        // If our current sum is better than the previous best sum, we can make
        // the best sum our current sum.
        if (currentSum > bestSum) bestSum = currentSum;

        // If our current sum is negative, it's better to start a new path
        if (currentSum < 0) currentSum = 0;
    }

    return bestSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]) === 5); // (the sum of 2 and 3)
alert(getMaxSubSum([2, -1, 2, 3, -9]) === 6);
alert(getMaxSubSum([-1, 2, 3, -9, 11]) === 11);
alert(getMaxSubSum([-2, -1, 1, 2]) === 3);
alert(getMaxSubSum([100, -9, 2, -3, 5]) === 100);
alert(getMaxSubSum([1, 2, 3]) === 6); // (take all)

// If all items are negative, it means that we take none
// (the subarray is empty), so the sum is zero:
alert(getMaxSubSum([-1, -2, -3]) === 0);
