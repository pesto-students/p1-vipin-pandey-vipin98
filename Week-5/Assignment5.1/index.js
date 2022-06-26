function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

const generator = (function* () {
    // waiting for .next()
    const a = yield 5;
    // waiting for .next()
})();


async function asyncCall() {
    const result = await resolveAfter2Seconds();
    let generatorValue1 = generator.next()
    let generatorValue2 = generator.next(15)
    return [result, generatorValue1, generatorValue2]
}

asyncCall()
    .then((res) => {
        console.log("res", res)
    })
    .catch((err) => {
        console.log(res)
    })
    .finally(() => {
        console.log("finally")
    })
