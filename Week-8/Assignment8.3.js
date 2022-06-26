
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}


function LevelOrder() {
    var queue = [];
    queue.push(root);
    while (queue.length != 0) {

        var tempNode = queue.shift();
        console.log(tempNode.data + " ");

        /* Enqueue left child */
        if (tempNode.left != null) {
            queue.push(tempNode.left);
        }

        /* Enqueue right child */
        if (tempNode.right != null) {
            queue.push(tempNode.right);
        }
    }
}

var root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
LevelOrder();



