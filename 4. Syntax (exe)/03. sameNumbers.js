function sameNumbers(num) {
    let numToString = num.toString();
    let arr = numToString.split('');

    let isSame = true;
    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        if (index == arr.length - 1) {

        } else if (arr[index] != arr[index + 1]) {
            isSame = false;
            break;
        }
    }

    for (let index = 0; index < arr.length; index++) {
        sum += Number(arr[index]);
    }

    if (isSame == true) {
        console.log('true');
        console.log(sum);
    } else {
        console.log('false');
        console.log(sum);
    }
}
sameNumbers(2222222);
sameNumbers(1234);
