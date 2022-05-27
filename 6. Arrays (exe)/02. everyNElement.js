function everyNElement(arr, step) {
    // First solution
    for (let index = 0; index < arr.length; index+=step) {
        console.log(arr[index]);
    }

    // Second solution
    console.log(arr.filter((element, index) => index % step == 0).join('\n'));
}
everyNElement(['5',
'20',
'31',
'4',
'20'],
2)