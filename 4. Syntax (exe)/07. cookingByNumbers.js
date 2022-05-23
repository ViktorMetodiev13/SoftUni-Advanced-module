function cookingByNumbers(num, par1, par2, par3, par4, par5) {
    num = Number(num);
    if (par1 == 'chop') {
        num /= 2;
        console.log(num);
    } else if (par1 == 'dice') {
        num = Math.sqrt(num);
        console.log(num);
    } else if (par1 == 'spice') {
        num += 1;
        console.log(num);
    } else if (par1 == 'bake') {
        num *= 3;
        console.log(num);
    } else if (par1 == 'fillet') {
        num *= 0.80
        console.log(num);
    }

    if (par2 == 'chop') {
        num /= 2;
        console.log(num);
    } else if (par2 == 'dice') {
        num = Math.sqrt(num);
        console.log(num);
    } else if (par2 == 'spice') {
        num += 1;
        console.log(num);
    } else if (par2 == 'bake') {
        num *= 3;
        console.log(num);
    } else if (par2 == 'fillet') {
        num *= 0.80
        console.log(num);
    }

    if (par3 == 'chop') {
        num /= 2;
        console.log(num);
    } else if (par3 == 'dice') {
        num = Math.sqrt(num);
        console.log(num);
    } else if (par3 == 'spice') {
        num += 1;
        console.log(num);
    } else if (par3 == 'bake') {
        num *= 3;
        console.log(num);
    } else if (par3 == 'fillet') {
        num *= 0.80
        console.log(num);
    }

    if (par4 == 'chop') {
        num /= 2;
        console.log(num);
    } else if (par4 == 'dice') {
        num = Math.sqrt(num);
        console.log(num);
    } else if (par4 == 'spice') {
        num += 1;
        console.log(num);
    } else if (par4 == 'bake') {
        num *= 3;
        console.log(num);
    } else if (par4 == 'fillet') {
        num *= 0.80
        console.log(num);
    }

    if (par5 == 'chop') {
        num /= 2;
        console.log(num);
    } else if (par5 == 'dice') {
        num = Math.sqrt(num);
        console.log(num);
    } else if (par5 == 'spice') {
        num += 1;
        console.log(num);
    } else if (par5 == 'bake') {
        num *= 3;
        console.log(num);
    } else if (par5 == 'fillet') {
        num *= 0.80
        console.log(num);
    }
}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');