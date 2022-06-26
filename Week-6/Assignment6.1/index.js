// Input 1: A = [1, 2, 3, 4, -10]
// Output 1: 10

function maxArraySum(a) {
    var maxValue = a[0]
    var currentValue = 0

    for (var i = 0; i < a.length; i++) {
        currentValue = currentValue + a[i]
        if (maxValue < currentValue) {
            maxValue = currentValue
        }
        if (currentValue < 0) {
            currentValue = 0
        }
    }
    return maxValue
}
var a = [1, 2, 3, 4, -10]
// var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log("max arry", maxArraySum(a))


// Time Complexity: O(n).
// Space Complexity: O(1). 