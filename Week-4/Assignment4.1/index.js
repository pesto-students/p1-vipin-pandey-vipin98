const STATE = {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
}
class MyPromise {
    constructor(callback) {
        // Initial state of Promise is empty
        this.state = STATE.PENDING;
        this.value = undefined;
        this.handlers = [];
        // Invoke callback by passing the resolve and the reject function of our class
        callback(this.resolve, this.reject);
    }

    resolve = (value) => {
        if (this.state !== 'PENDING') return;

        this.state = 'FULFILLED'
        this.value = value
        console.log(this.value)
        this.finally()
    }

    reject = (error) => {
        if (this.state !== 'PENDING') return;
        this.state = 'REJECTED'
        this.value = error
        console.log(this.value)
        this.finally()
    }

    finally(callback) {
        this.state = 'FULFILLED'
        console.log("finally")
    }


}


const getNumber = () => {

    return Math.random() * 100


}

const testPromiseRejction = new MyPromise((res, rej) => {
    let randomNumber = getNumber()
    let Divisor = 5
    setTimeout(() => {
        if (Divisor === 5) {
            rej('number can not be divisibel by 5')

        } else {
            res(randomNumber / Divisor)
        }
    }, 1000);
});
const testPromiseResolve = new MyPromise((res, rej) => {
    let randomNumber = getNumber()
    let Divisor = 2
    setTimeout(() => {
        if (Divisor === 5) {
            rej('number can not be divisibel by 5')

        } else {
            res(randomNumber / Divisor)
        }
    }, 1000);
});
