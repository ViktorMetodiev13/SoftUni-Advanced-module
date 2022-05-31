function lowestPrice(arr) {
    let result = {};

    for (let line of arr) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (result.hasOwnProperty(product) == false) {
            result[product] = {
                town,
                price
            }
        } else {
            if (price <= result[product].price) {
                result[product] = {
                    town,
                    price
                }
            }
        }
    }

    for (let key in result) {
        console.log(`${key} -> ${result[key].price} (${result[key].town})`);
    }
}
lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);