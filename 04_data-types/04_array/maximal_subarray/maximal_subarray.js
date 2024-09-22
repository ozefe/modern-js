// Function to find the maximum subarray sum using Kadane's Algorithm
function getMaxSubSum(arr) {
  let maxEnding = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    maxEnding = Math.max(maxEnding + arr[i], arr[i]);
    result = Math.max(result, maxEnding);
  }

  return result;
}

alert(getMaxSubSum([-1, 2, 3, -9])); // 5
alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
alert(getMaxSubSum([-2, -1, 1, 2])); // 3
alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100
alert(getMaxSubSum([1, 2, 3])); // 6
alert(getMaxSubSum([-1, -2, -3])); // 0
