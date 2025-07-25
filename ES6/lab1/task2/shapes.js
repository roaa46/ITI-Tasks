 class Shape {
    constructor(name) {
        this.name = name;
    }
    toString() {
        let str = `${this.name} area = ${this.getArea()} and perimeter = ${this.getPerimeter()}`;
        return str;
    }
}

 class Rectangle extends Shape {
    constructor(width, height) {
        super("Rectangle");
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

 class Square extends Shape {
    constructor(side) {
        super("Square");
        this.side = side;
    }
    getArea() {
        return this.side * this.side;
    }
    getPerimeter() {
        return 4 * this.side;
    }
}

 class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
    getArea() {
        const PI = Math.PI;
        let pow = Math.pow(this.radius, 2);
        return PI * pow;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

export {Shape, Rectangle, Square, Circle};
