// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const licenses = ["MIT", "LGPL-3.0", "Mozilla Public License 2.0", "AGPL-3.0", "Unlicense", "Apache-2.0", "GPL-3.0", "none"];
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your Project Title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "usageInformation",
        message: "What is the usage information?"
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "What are the contribution guidelines?"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "What are the test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "What license do you choose?",
        choices: licenses
    },
    {
        type: "input",
        name: "username",
        message: "What is your username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), err => {
        if (err) {
            console.error(err)
            return;
        }
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {
        console.log(response);
        writeToFile("README.md", md.generateMarkdown(response));


    });
}

// Function call to initialize app
init();
