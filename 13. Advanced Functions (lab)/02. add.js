function solution(number) {
    function resuilt(newNumber) {
        return number + newNumber;
    };

    return resuilt;
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));