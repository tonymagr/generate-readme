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
        // ? console.log('Success!', response.projectTitle, response.description, response.installation, response.usage, response.license)
        ? responseArea = response
        : console.log('No response')
    );
}
  
// TODO: Create a function to write README file
async function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        // err ? console.error(err) : writeStatus = 'success'
        // fs.appendFile('message.txt', 'Hello Node\n', (err) =>
        if (err) {
            console.error(err);
        } else {
            writeStatus = 'success';
            console.log('Write was a', writeStatus);
        }
    });
}

async function getAndWrite () {
    await getInput();

    console.log("responseArea", responseArea);
    console.log("responseArea.license", responseArea.license);
    console.log("licenseChoices", licenseChoices);

    // let idx = licenseChoices.findIndex(srchIdx => srchIdx === responseArea.license);

    let idx;
    licenseChoices.some(function(entry, i) {
        if (entry.license == responseArea.license) {
            idx = i;
            return true;
        }
    });
    console.log("idx", idx);
    responseArea.licenseBadge = licenseChoices[idx].licenseBadge;
    responseArea.copyRight = licenseChoices[idx].copyRight;

    let result = generateMarkdown(responseArea);

    writeToFile("./READMEsample.md", result);
   
    // console.log('generateMarkdown result\n', result);

    // fs.appendFile("./READMEsample.md", "After call generateMarkdown\n", (err) => {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         writeStatus = 'write success';
    //         console.log('Write was a', writeStatus);
    //     }
    // });
    // console.log("done writing");
}

getAndWrite();

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
