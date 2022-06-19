sortArray = (x, y) => x.sort((a,b) => (y == 'asc' ? a - b : b - a));


console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
console.log(sortArray([14, 7, 17, 6, 8], 'desc'));