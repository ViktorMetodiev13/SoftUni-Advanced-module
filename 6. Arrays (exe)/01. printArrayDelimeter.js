function printArrayDelimeter(arr, delimeter) {
    let result = '';

    for (let index = 0; index < arr.length; index++) {
        result += `${arr[index]}${delimeter}`
    }

    console.log(result);

    console.log(arr.join(delimeter));
}
printArrayDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-');