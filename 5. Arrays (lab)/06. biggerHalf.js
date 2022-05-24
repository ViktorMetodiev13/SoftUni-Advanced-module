function biggerHalf(arr) {
    let sorted = arr.sort((a, b) => a - b);

    if (sorted.length % 2 == 0) {
        let result = sorted.slice(sorted.length / 2, sorted.length);
        console.log(result);
    } else {
        let result = sorted.slice(Math.floor(sorted.length / 2), sorted.length);
        console.log(result);
    }
}
biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6])