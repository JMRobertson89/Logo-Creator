
const { Circle, Square, Triangle } = require('./shapes');

describe('Shape classes', () => {
    test('Circle generates correct SVG', () => {
    const circle = new Circle('#ff0000');
    expect(circle.generateShapeSVG()).toBe('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="#ff0000" />');
    });

    test('Square generates correct SVG', () => {
        const square = new Square('#00ff00');
        expect(square.generateShapeSVG()).toBe('<rect cx="50%" cy="50%" r="100" height="100%" width="100%" fill="#00ff00" />');
    });

    test('Triangle generates correct SVG', () => {
        const triangle = new Triangle('#0000ff');
        expect(triangle.generateShapeSVG()).toBe('<polygon cx="50%" cy="50%" r="100" height="100%" width="100%" fill="#0000ff" />');
    });
});