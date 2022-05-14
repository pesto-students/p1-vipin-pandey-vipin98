class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }
    pop() {
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
}

function ParenthesisChecker(exp) {


    let stack = new Stack()
    for (let i = 0; i < exp.length; i++) {
        if (exp[i] == "[" || exp[i] == "{" || exp[i] == "(") {
            stack.push(exp[i])
        }
        let check;
        switch (exp[i]) {
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                break;

        }

    }
    return (stack.items.length == 0);
}

console.log(ParenthesisChecker("{[(})]}"))
console.log(ParenthesisChecker("{[()]}"))