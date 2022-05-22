function circleArea(arg1) {
    if (typeof(arg1) == 'number') {
        console.log((arg1 * arg1 * Math.PI).toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(arg1)}.`);
    }
}
circleArea(5);
circleArea('name');