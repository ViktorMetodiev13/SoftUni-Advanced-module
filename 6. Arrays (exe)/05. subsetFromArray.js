function subsetFromArray(arr) {
    let resultArr = [];
    let biggestNum = arr[0];
    for (let index = 0; index < arr.length; index++) {
        let currentNum = arr[index];
        if (currentNum >= biggestNum) {
            resultArr.push(currentNum);
            biggestNum = currentNum;
        }
    }
    return resultArr;
}
console.log(subsetFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));