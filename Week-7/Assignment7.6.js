class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
        return this.items
    }
    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
}

// function Que(arr) {
//     let stack = []
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 1) {
//             stack.push(arr[i + 1])
//             console.log(stack)
//             i++
//         } else if (arr[i] === 2) {
//             stack.pop()
//             console.log(stack)

//         }
//     }
//     console.log(stack)

// }

// console.log(Que([1, 2, 2, 2, 1, 4]))
// // Que(1, 3)
// // console.log(Que(2, 3))

