function memorize(fn) {
    const cache = new Map()
    return function (...args) {
        const key = args.toString();
        if (cache.has()) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}


function add(a, b) {
    return a + b
}

function time(fn) {
    console.time();
    console.log(fn())
    console.timeEnd()
}

const addM = memorize(add)

time(() => addM(8, 9))
time(() => addM(8, 9))