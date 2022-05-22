function aggregateElements(arr) {
    let sum = 0;
    let sumOfInverseValues = 0;
    let concatenatedResult = '';
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        sumOfInverseValues += 1 / arr[index];
        concatenatedResult += arr[index];
    }
    console.log(sum);
    console.log(sumOfInverseValues);
    console.log(concatenatedResult);
}
aggregateElements([1, 2, 3]);