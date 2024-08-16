// TODO Shape classes

class Shape {
    constructor(shapeColor) {
        this.shapeColor = shapeColor;
    }
    generateShapeSVG() {
        throw new Error("generateSVG() must be implemented in subclasses");
    }
}

class Circle extends Shape {
    generateShapeSVG() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shape {
    generateShapeSVG() {
        return `<polygon cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />`;
    }
}

class Square extends Shape {
    generateShapeSVG() {
        return `<rect cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />`;
    }
}


module.exports = { Circle, Square, Triangle };