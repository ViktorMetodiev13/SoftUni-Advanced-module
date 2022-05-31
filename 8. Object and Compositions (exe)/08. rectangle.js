function rectangle(width, height, color) {
    class Rectangle {
        constructor(width, height, color) {
            this.width = width;
            this.height = height;
            let toUpper = color[0].toUpperCase() + color.slice(1)
            this.color = toUpper;
        }
        calcArea() {
            return this.height * this.width;
        }
    }

    return new Rectangle(width, height, color);
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());