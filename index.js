const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes");

// TODO Write Prompts

inquirer.prompt([
    {
        type: "input",
        name: "text",
        message: "Enter up to 3(three) characters for the logo",
        validate: function(input) {
            if (input.length <= 3) {
                return true;
            } else {
                return "Please enter up to 3(three) characters";
        }}
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color OR a hexadecimal number for the text",
    },
    {
        type: "list",
        name: "shape",
        message: "Choose a shape for your logo",
        choices: ["circle ⏺️", "triangle 🔼", "square ⏹️"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color OR a hexadecimal number for the shape",
    }
    // TODO write SVG file
]).then((answers) => {
    const { text, textColor, shape, shapeColor} = answers;

    const svgContent = generateSVG( text, textColor, shape, shapeColor);

    fs.writeFile("./lib/logo.svg", svgContent, (err) => {
        if (err) {
            console.error("Error generating logo.svg", err);
        } else {
            console.log("Generated logo.svg");
        }
    });
});


// TODO Generate logo


function generateSVG(text, textColor, shape, shapeColor) {
    let shapeSVG = "";
    switch (shape) {
        case "circle ⏺️":
            shapeSVG = new Circle(shapeColor).generateShapeSVG();
            break;
        case "triangle 🔼":
            shapeSVG = new Triangle(shapeColor).generateShapeSVG();
            break;
        case "square ⏹️":
            shapeSVG = new Square(shapeColor).generateShapeSVG();
            break;
    }

    return `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSVG}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>`;
}
