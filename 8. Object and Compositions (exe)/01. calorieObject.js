function calorieObject(arr) {
    let resultObj = {};

    for (let index = 0; index < arr.length; index+=2) {
        let product = arr[index];
        let calories = arr[index + 1];
        resultObj[product] = Number(calories);
    }

    console.log(resultObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])