function processOddPositions(arr) {
    let resultArr = [];
    for (let index = 0; index < arr.length; index++) {
        if (index % 2 != 0) {
            resultArr.push(arr[index]);
        }
    }

    let finalResult = resultArr.map(x => x * 2).reverse();
    console.log(finalResult);
}
processOddPositions([10, 15, 20, 25]);

