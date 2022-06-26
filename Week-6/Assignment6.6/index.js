const ThreeSum = (arr, sum) => {
    let i = 0
    let j = 1
    let k = 2
    let closestSum = 1

    while (i < arr.length && j < arr.length && k < arr.length) {
        if (Math.abs(sum - closestSum) > Math.abs(sum - (arr[i] + arr[j] + arr[k]))) {
            closestSum = (arr[i] + arr[j] + arr[k]);
        }
        else {
            i++
            j++
            k++
        }
    }
    return closestSum
}
console.log(ThreeSum([-1, 2, 1, - 4], 1))
console.log(ThreeSum([1, 2, 3, 4, -5], 10))

// Time Complexity: O(n3).
// Space Complexity: O(1). 