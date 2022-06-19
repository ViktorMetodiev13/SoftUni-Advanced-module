function getFibonator() {
    let fibonacciArr = [0, 1,]
    function fib(arr) {
        arr = fibonacciArr;
        let num1 = arr.slice(-1);
        let num2 = fibonaarrcciArr.slice(-2);
        let newNum = num1 + num2;
        fibonacciArr.push(newNum);
        return fibonacciArr.slice(-1);
    }
    
    return fib;
}

let fib = getFibonator();

console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13