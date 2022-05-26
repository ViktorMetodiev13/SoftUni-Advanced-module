function addAndRemove(arr) {
    let resultArr = [1];
    for (let index = 0; index < arr.length; index++) {
        if (index == arr.length) {
            resultArr.push(index);
        }
        else {
            resultArr.push(index + 2);
        }
        if (arr[index] == 'remove') {
            resultArr.pop();
        }
    }
    console.log(resultArr.join('\n'));
}
addAndRemove(['add',
    'add',
    'add',
    'add'
]);
