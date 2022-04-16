function createIncrement() {
    let count = 0;
    let message;
    function increment() {
        count++;
        message = `Count is${count}`;
    }
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?


//  in the above createIncrement when we call  increment() in this function we increment the count by +1 and
//  when we call log() then we return  message string so initially count is 0  so by calling log() it print  Count is 0
//  but if we want to print count value on the increment of count then we have to move message string inside increment function

// function createIncrement() {
//     let count = 0;
//     let message;
//     function increment() {
//         count++;
//         message = `Count is${count}`;
//     }
//     function log() {
//         console.log(message);
//     }
//     return [increment, log];
// }