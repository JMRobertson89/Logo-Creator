# Logo Creator

![License](https://img.shields.io/badge/license-MIT-blue)

## Description
    A Node.js command-line application that prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.


## Table of Contents
-[Description](#description)

-[Installation](#installation)

-[User Story](#user-story)

-[Acceptance Criteria](#acceptance-criteria)

-[Usage](#usage)

-[Credits](#credits)

-[Tests](#tets)

-[Contact](#contact)


## User Story

```md
AS a user
I WANT to generate a simple logo for my projects
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


## Installation

- Clone https://github.com/JMRobertson89/Logo-Creator.git
- Open using VS Code or your editor of choice
- Install node.js
- Install inquirer@8.2.4 package
- Install the Jest package

## Usage

Run the application in Node.js and answer the prompts

<video width="960" height="520" controls src="./Assets/Images/Screen Recording 2024-08-15 at 8.56.45 PM.mp4"></video>


## Credits

undefined

## Tests

none

## Contact

[JMRobertson89](https://github.com/JMRobertson89)

Email Joshua Robertson at joshrobertson1618@gmail.com