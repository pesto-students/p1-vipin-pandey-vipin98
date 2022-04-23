const fib = (n) => ({
    [Symbol.iterator]() {
        let i = 0;
        var arr = [];
        return {
            next() {
                if (i <= n) {

                    if (i == 0 || i == 1) {
                        let prev = i
                        arr.push(i);
                        i++
                        return { value: prev, done: false }
                    } else {
                        var a = arr[i - 1];
                        var b = arr[i - 2];
                        arr.push(a + b);
                        i++
                        return { value: a + b, done: false }
                    }
                } else {
                    return { done: true }
                }
            }
        }
    }
})


for (const number of fib(6)) {
    console.log(number)
}
