function smallestTwoNumbers(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let firstNum = sorted.shift();
    let secondNum = sorted.shift();
    let result = firstNum + " " + secondNum;
    console.log(result);
}
smallestTwoNumbers([30, 15, 50, 5]);