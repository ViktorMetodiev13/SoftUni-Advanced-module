function numberOfDays(month, year) {
    
    let result =  new Date(year, month, 0).getDate();
    console.log(result);
}
numberOfDays(2, 2021);


