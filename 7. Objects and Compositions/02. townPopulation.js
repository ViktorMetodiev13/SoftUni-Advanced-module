function townPopulation(arr) {
    let result = {};

    for (let line of arr) {
        let [townName, townPopulation] = line.split('<->');

        if (result.hasOwnProperty(townName) == false) {
            result[townName] = Number(townPopulation);
        } else {
            result[townName] += Number(townPopulation);
        }
    }

    for (let key in result) {
        console.log(key + `: ${result[key]}`);
    }
}
townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])
console.log('-----------------');
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])

