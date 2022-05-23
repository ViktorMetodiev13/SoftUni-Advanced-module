function fruits(name, weight, pricePerKilo) {
    console.log(`I need \$${(weight / 1000 * pricePerKilo).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${name}.`);
}
fruits('orange', 2500, 1.80)