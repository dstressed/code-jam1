function sumOfOther(array) {
    if (array.length === 0) return [];
    let sum = array.reduce((previous, current) => +previous + +current);
    return array.map(item => sum - item);
}