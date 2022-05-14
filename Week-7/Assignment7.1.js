class Node {
    constructor(val) {
        this.val = val;
        this.next = null
    }
}

class Linklist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this;

    }
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
    print() {
        var arr = [];
        var current = this.head;
        var prev;
        while (current) {
            arr.push(current.val)
            prev = current
            current = current.next
            console.log(prev.val)
        }
        console.log(arr)
    }
}
var list = new Linklist()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
console.log(list.reverse())
list.print()