function sortArray(inputArr, str) {
    if (str == 'asc') {
        ascendingOrder(inputArr);
    } else if (str == 'desc') {
        descendingOrder(inputArr)
    }


    function ascendingOrder(arr) {
        arr.sort((a,b) => a - b);
        return arr;
    } 
    
    function descendingOrder(arr) {
        arr.sort((a,b) => b - a);
        return arr;
    }

    return inputArr;
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));

sortArray([14, 7, 17, 6, 8], 'desc');