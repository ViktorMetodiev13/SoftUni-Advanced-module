function solution() {
    let state = '';

    function append(str) {
        state += str;
    }

    function removeStart(n) {
        state = state.slice(n); // from 0 to n - for example from 0 to 3 (3 is not included)
    }

    function removeEnd(n) {
        state = state.slice(0, -n);
    }

    function print() {
        console.log(state);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}


const createProcessor = solution();

createProcessor.append('hello');
createProcessor.print();
