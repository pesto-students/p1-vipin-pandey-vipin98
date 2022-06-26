// Input: N = 5arr[] = { 0 2 1 2 0}
// Output: 0 0 1 2 2

const sortArray = (a, n) => {
    let zero = 0;
    let one = 0;
    let two = n - 1;
    let temp = 0;

    while (one < two) {
        if (a[one] == 0) {
            temp = a[zero]
            a[zero] = a[one]
            a[one] = temp
            zero++
            one++
        }
        else if (a[one] == 1) {
            one++
        }
        else {
            temp = a[one]
            a[one] = a[two]
            a[two] = temp
            two--
        }
    }
    console.log(a)
}
console.log(sortArray([0, 2, 1, 2, 0], 5))

// Time Complexity: O(n).
// Space Complexity: O(1). 




