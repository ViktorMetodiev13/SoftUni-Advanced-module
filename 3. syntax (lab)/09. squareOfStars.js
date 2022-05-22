function squareOfStars(num) {
    let result = '';
    for (let index = 0; index < num; index++) {
        for (let index = 0; index < num; index++) {
            result += '* ';
        }
        result += '\n';
    }
    console.log(result);
}
squareOfStars(3);