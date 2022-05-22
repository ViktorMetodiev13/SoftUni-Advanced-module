function sumOfNumber(firstNum, lastNum) {
    let sum = 0;
    for (let index = Number(firstNum); index <= Number(lastNum); index++) {
        sum += Number(index);
    }
    console.log(sum);
}
sumOfNumber('-8', '20')