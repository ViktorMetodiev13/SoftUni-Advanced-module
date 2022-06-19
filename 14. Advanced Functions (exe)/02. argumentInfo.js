function argumentsInfo(...parameters) {
    const types = {};

    for (let arg of parameters) {
        const type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
    }

    const result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (const [type, count] of result) {
        console.log(`${type} = ${count}`);
    }
}

argumentsInfo('cat', 42, function () { console.log('Hello world!'); })