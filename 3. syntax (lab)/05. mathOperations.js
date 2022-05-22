function mathOperations(num1, num2, operation) {
    if (operation == '+') {
        console.log(num1 + num2);
    } else if (operation == '-') {
        console.log(num1 - num2);
    } else if (operation == '*') {
        console.log(num1 * num2);
    } else if (operation == '/') {
        console.log(num1 / num2);
    } else if (operation == '%') {
        console.log(num1 % num2);
    } else if (operation == '**') {
        console.log(num1 ** num2);
    }
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '**')