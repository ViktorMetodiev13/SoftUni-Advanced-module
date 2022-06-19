function filterEmployees(data, criteria) {
    data = JSON.parse(data);
    const [key, value] = criteria.split('-');

    let employees = data.filter(e => e[key] == value);

    for (let index = 0; index < employees.length; index++) {
        let fullName = `${employees[index].first_name} ${employees[index].last_name}`;

        console.log(`${index}. ${fullName} - ${employees[index].email}`);
    }
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
    {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female');