function toFindDuplicates(arry) {
    const uniqueElements = new Set(arry);
    let duplicate = false
    const filteredArray = arry.filter(item => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
        } else {

            duplicate = true;
            return duplicate
        }
    });

    return duplicate
}

console.log(toFindDuplicates([1, 2, 3, 4, 3]));
console.log(toFindDuplicates([1, 2, 3, 4]));
