let count = 5;

const parser = {
    increment() { count++; },
    decremenent() { count-- },
    reset() { count = 0 }
}
parser.increment();
console.log(count);