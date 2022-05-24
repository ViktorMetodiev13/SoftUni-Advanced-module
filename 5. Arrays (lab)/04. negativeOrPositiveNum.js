function negativeOrPositiveNum(arr) {
    let resultArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            resultArr.unshift(arr[index]);
        } else {
            resultArr.push(arr[index]);
        }
    }

    for (let element of resultArr) {
        console.log(element);
    }
}
negativeOrPositiveNum([7, -2, 8, 9])