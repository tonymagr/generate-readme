// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseChoicesTg = require('./utils/licenseChoices');
const generateMarkdown = require('./utils/generateMarkdown');

let writeStatus, appendStatus, responseArea;

// TODO: Create an array of questions for user input
const licenseChoices = licenseChoicesTg.licenseChoices;

let licenseArray = [];
for (const idx of licenseChoices) {
    licenseArray.push(idx.license);
}

const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'projectTitle'
    },
    {
        type: 'input',
        message: 'Name of author:',
        name: 'author'
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Provide installation instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide usage instructions.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide contribution guidelines to others who would enhance your open source.',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Test instructions:',
        name: 'testInstructions'
    },
    {
        type: 'input',
        message: 'GitHub username:',
        name: 'gitHubUsername'
    },
    {
        type: 'input',
        message: 'Email address:',
        name: 'emailAddress'
    },
    {
        type: 'list',
        message: 'Select node license:',
        name: 'license',
        choices: licenseArray
    },
];

async function getInput () {

    await inquirer
    .prompt(questions)
    .then((response) =>
      response !== null
        ? responseArea = response
        : console.log('No response')
    );
}
  
// TODO: Create a function to write README file
async function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) { 
            console.error(err);
        }
    });
}

async function getAndWrite () {
    await getInput();

    // Find index of chosen license to later access associated badge and copyright.
    let idx;
    licenseChoices.some(function(entry, i) {
        if (entry.license == responseArea.license) {
            idx = i;
            return true;
        }
    });
    responseArea.licenseBadge = licenseChoices[idx].licenseBadge;
    responseArea.copyright = licenseChoices[idx].copyright;
    console.log("responseArea", responseArea);

    // Create Markdown text using user input
    let result = generateMarkdown(responseArea);
    // Generate README sample file
    writeToFile("./READMEsample.md", result);
}

getAndWrite();

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
