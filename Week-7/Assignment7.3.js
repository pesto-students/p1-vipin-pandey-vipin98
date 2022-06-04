
class Node {
    constructor() {
        let data;
        let next;
        let flag;
    }
}

function push(head_ref, new_data) {
    // Allocate node
    let new_node = new Node();

    // Put in the data
    new_node.data = new_data;

    new_node.flag = 0;

    // Link the old list off the new node
    new_node.next = head_ref;

    // Move the head to point to the new node
    head_ref = new_node;
    return head_ref;
}

// Returns true if there is a loop in linked
// list else returns false.
function detectLoop(h) {
    while (h != null) {

        // If this node is already traverse
        // it means there is a cycle
        // (Because you we encountering the
        // node for the second time).
        if (h.flag == 1)
            return true;

        // If we are seeing the node for
        // the first time, mark its flag as 1
        h.flag = 1;

        h = h.next;
    }
    return false;
}

// Driver code

// Start with the empty list
let head = null;

head = push(head, 1);
head = push(head, 2);
head = push(head, 3);

// Create a loop for testing
head.next.next.next = head;

if (detectLoop(head)) {
    console.log("Loop found");

}
else {
    console.log("No Loop");
}
