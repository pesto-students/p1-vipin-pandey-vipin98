// prices = [7, 1, 5, 3, 6, 4] 
// Output: 5 

const BuySellStock = (arr) => {

    var buy = arr[0]
    var sell = 0
    var day = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < buy) {
            buy = arr[i]
            sell = arr[i + 1]
            day = i
        } else if (i > day && buy > 0) {
            if (arr[i] > sell) {
                sell = arr[i]
            }
        }
    }
    if (buy > sell || sell == undefined) {
        return 0
    } else {
        return sell - buy
    }
}

console.log("result", BuySellStock([7, 6, 4, 3, 1]))
console.log("result", BuySellStock([7, 1, 5, 3, 6, 4]))

// Time Complexity: O(n).
// Space Complexity: O(1). 