function createStack() {
    let item = [];

    function push(data) {
        return item.push(data);

    }
    function pop(data) {
        return item.pop();
    }
    return { push, pop }
}
const stack = createStack();
// stack.push(10);
// stack.pop();
// stack.items;