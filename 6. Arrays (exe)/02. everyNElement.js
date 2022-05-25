function everyNElement(arr, step) {
    for (let index = 0; index < arr.length; index+=step) {
        console.log(arr[index]);
    }
}
everyNElement(['5',
'20',
'31',
'4',
'20'],
2)