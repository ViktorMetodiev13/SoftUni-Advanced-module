function pieceOfPie(arr, target1, target2) {
    let startIndex = 0;
    let lastIndex = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == target1) {
            startIndex = index;
        }

        if (arr[index] == target2) {
            lastIndex = index;
        }
    }

    let result = arr.slice(startIndex, lastIndex + 1);
    console.log(result);
}
pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],

    'Key Lime Pie',
    'Lemon Meringue Pie')
console.log('--------------------');
pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie')