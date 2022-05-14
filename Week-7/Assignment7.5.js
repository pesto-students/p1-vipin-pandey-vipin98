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



function NextGreater(arr) {
    let stack = [];

    stack.push(arr[0]);

    for (var i = 1; i < arr.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] < arr[i]) {
            console.log(arr[i]);
            stack.pop();
        }
        stack.push(arr[i]);
    }

    while (stack.length != 0) {
        console.log(-1);
        stack.pop();
    }
}
NextGreater([1, 3, 2, 4])