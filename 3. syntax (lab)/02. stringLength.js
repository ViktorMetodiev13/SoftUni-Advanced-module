function stringLength(arg1, arg2, arg3) {
    let sum = arg1.length + arg2.length + arg3.length;
    console.log(sum);
    let avgLength = Math.floor(sum / 3);
    console.log(avgLength);
}
stringLength('chocolate', 'ice cream', 'cake')