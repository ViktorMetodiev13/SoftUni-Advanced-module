function roadRadar(speed, place) {
    switch (place) {
        case "motorway":
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`);
            } else {
                let overSpeed = speed - 130;
                if (overSpeed <= 20) {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 130 - speeding`);
                } else if (overSpeed <= 40) {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 130 - excessive speeding`);
                } else {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 130 - reckless drivin`);
                }
            }
            break;
        case "interstate":
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`);
            } else {
                let overSpeed = speed - 90;
                if (overSpeed <= 20) {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 90 - speeding`);
                } else if (overSpeed <= 40) {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 90 - excessive speedin`);
                } else {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 90 - reckless drivin`);
                }
            }
            break;
        case "city":
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`);
            } else {
                let overSpeed = speed - 50;
                if (overSpeed <= 20) {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 50 - speeding`);
                } else if (overSpeed <= 40) {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 50 - excessive speedin`);
                } else {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 50 - reckless drivin`);
                }
            }
            break;
        case "residential":
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`);
            } else {
                let overSpeed = speed - 20;
                if (overSpeed <= 20) {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 20 - speeding`);
                } else if (overSpeed <= 40) {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 20 - excessive speedin`);
                } else {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of 20 - reckless drivin`);
                }
            }
            break;

    }
}
roadRadar(40, 'city');