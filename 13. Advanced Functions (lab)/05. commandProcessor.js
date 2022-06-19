function solution() {
    let state = '';

    function append(str) {
        state += str;
    }

    function removeStart(n) {
        state = state.slice(n); // from n to the end of the string
    }

    function removeEnd(n) {
        state = state.slice(0, -n);
    }

    function print() {
        console.log(state);
    }

    append('hello');
    append('again');
    removeStart(3);
    removeEnd(4);
    print();
}

solution();