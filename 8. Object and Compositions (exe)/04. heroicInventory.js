function heroicInventory(inputArr) {
    let result = [];
    for (let data of inputArr) {
        let tokens = data.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ');

        result.push({name, level, items});
    }

    return JSON.stringify(result);
}
console.log(heroicInventory(['Isacc / 25 / Apple',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));