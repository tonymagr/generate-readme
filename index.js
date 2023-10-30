// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseChoicesTg = require('./utils/licenseChoices');
// require to UD JS files ;

let writeAppendStatus;

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
        ? console.log('Success!', response.projectTitle, response.description, response.installation, response.usage, response.license)
        : console.log('No response')
    );
}
  
// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, (err) => {
        // err ? console.error(err) : writeAppendStatus = 'success'
        if (err) {
            console.error(err);
        } else {
            writeAppendStatus = 'success';
            console.log('Write was a', writeAppendStatus);
        }
    });
}

async function getAndWrite () {
    await getInput();
    await writeToFile('READMEsample.md','Test Line\n');
}

getAndWrite();

// fs.appendFile('log.txt', process.argv[2] + '\n', (err) =>
// fs.appendFile('message.txt', 'Hello Node\n', (err) =>
//     err ? console.error(err) : console.log('Success!')
// );

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
