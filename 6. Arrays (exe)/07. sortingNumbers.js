function sortingNumbers(arr) {
    let resultArr = [];

    arr.sort((a, b) => b - a);
    while (arr.length != 0) {
        resultArr.push(arr.pop());
        resultArr.push(arr.shift());
    }
    return resultArr;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));