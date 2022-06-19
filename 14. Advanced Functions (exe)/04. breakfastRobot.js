function solution(input) {
    const recipesLibrary = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 10, fat: 7, flavour: 20 },
        eggs: { protein: 5, fat: 1, flavour: 1},
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let reportResult = '';

    function manager(str) {
        let [command, p1, p2] = str.split(' ');

        if (command == 'restock') {
            return restock(p1, p2);
        } else if (command == 'prepare') {
            return prepare(p1, p2);
        } else if (command == 'report') {
            report();
            console.log(reportResult);
        }

        // return success or error:
        // if () {

        // } else {

        // }
        return 
    }

    function restock(microelement, quantity) {
        for (const key in ingredients) {
            if (key == microelement) {
                ingredients[key] += Number(quantity);
            }
        }
        console.log('Success');
    }

    function prepare(recipe, quantity) {

    }

    function report() {
        for (const key in ingredients) {
            reportResult += `${key}=${ingredients[key]} `
        }
    }

    // return function manager
    return manager;
}

let manager = solution();
console.log(manager("restock flavour 50")); 
console.log(manager("prepare lemonade 4"));  
console.log (manager ("restock carbohydrate 10")); 
console.log (manager ("restock flavour 10")); 
console.log (manager ("prepare apple 1")); 
console.log (manager ("restock fat 10")); 
console.log (manager ("prepare burger 1")); 
console.log (manager ("report")); 
