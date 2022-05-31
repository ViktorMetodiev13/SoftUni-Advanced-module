function heroicInventory(inputArr) {
    let result = [];
    for (let data of inputArr) {
        let [name, level, items] = data.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        result.push({name, level, items});
    }

    return JSON.stringify(result);
}
console.log(heroicInventory(['Isacc / 25 / Apple',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));