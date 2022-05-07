// A = [5, 10, 3, 2, 50, 80] 
// B = 78
// output 1

function PairDiffrence(arr, B) {
    arr.sort((a, b) => a - b)
    let i = 0;
    let j = 1;
    while (i < arr.length && j < arr.length) {
        if (i != j && arr[j] - arr[i] === B) {
            return true;
        }
        else if (arr[j] - arr[i] < B) {
            j++;
        } else {
            i++;
        }
    }

    return false;
}
let A = [90, 70, 20, 80, 50];
let B = 70;

console.log(PairDiffrence(A, B))

// Time Complexity: O(n2).
// Space Complexity: O(1). 