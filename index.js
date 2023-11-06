// INDEX.JS
// --------

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseChoicesTg = require('./utils/licenseChoices');
const generateMarkdown = require('./utils/generateMarkdown');
const readMeSampleFile = "./result/READMEsample.md";

let responseArea, licenseChoices, questions, resultDisplay;
let licenseArray = [];
let errorFlag = false;


// Function Declarations
// ---------------------

function createInputs () {
    
    // Retrieve license names from full array of license data for pick list
    licenseChoices = licenseChoicesTg.licenseChoices;
    for (const idx of licenseChoices) {
        licenseArray.push(idx.license);
    }
    // TODO: Create an array of questions for user input
    questions = [
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'projectTitle',
            validate: projectTitle => {
                if (projectTitle) {
                return true;
                } else {
                console.log('Project title missing - Please provide.');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Name of author:',
            name: 'author',
            validate: author => {
                if (author) {
                return true;
                } else {
                console.log('Author name missing - Please provide.');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'description',
            validate: description => {
                if (description) {
                return true;
                } else {
                console.log('Description missing - Please provide.');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Provide installation instructions.',
            name: 'installation',
            validate: installation => {
                if (installation) {
                return true;
                } else {
                console.log('Installation instructions missing - Please provide.');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Provide usage instructions.',
            name: 'usage',
            validate: usage => {
                if (usage) {
                return true;
                } else {
                console.log('Usage information missing - Please provide.');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Provide contribution guidelines to others who would enhance your open source.',
            name: 'contribution',
            validate: contribution => {
                if (contribution) {
                return true;
                } else {
                console.log('Contribution guidelines missing - Please provide.');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Test instructions:',
            name: 'testInstructions',
            validate: testInstructions => {
                if (testInstructions) {
                return true;
                } else {
                console.log('Test instructions missing - Please provide.');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'gitHubUsername',
            validate: gitHubUsername => {
                if (gitHubUsername) {
                return true;
                } else {
                console.log('GitHub username missing - Please provide.');
                return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Email address:',
            name: 'emailAddress',
            validate: emailAddress => {
                // Source https://www.tutorialspoint.com/how-to-validate-email-address-using-regexp-in-javascript
                let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
                if (regex.test(emailAddress)) {
                    return true;
                } else {
                    console.log('\nInvalid email address format - Please enter as "name@provider.suffix".');
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Select node license:',
            name: 'license',
            choices: licenseArray
        },
    ];
}

// TODO: Create a function to initialize app
function init() {
    console.log("\n                           GENERATE README.MD");
    console.log("                           ------------------\n");
    console.log("Please provide all required information to automatically generate a");
    console.log("sample README.md file for your GitHub project or app.\n");
}

async function getInput () {

    await inquirer
    .prompt(questions)
    .then((response) => {
        if (response !== null) {
            responseArea = response;
        } else {
            console.log('No response');
            errorFlag = true;
        }
    });
}
  
// TODO: Create a function to write README file
async function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, (err) => {
        if (err) { 
            console.error(err);
            errorFlag = true;
        }
    });
}

async function getAndWrite () {
    await getInput();

    if (!errorFlag) {
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

        // Create Markdown text using user input
        let result = generateMarkdown(responseArea);
        resultDisplay = result;

        // Generate README sample file
        writeToFile(readMeSampleFile, result);
    }
    
    // Issue final message that file has been created.
    if (!errorFlag) {
        console.log("\nYour sample README file has been created: READMEsample.md in result folder.");
        console.log("Please view raw contents below.");
        console.log("(Now that application execution is finished, will later share the GitHub rendered version.)\n");
        console.log("Raw README.md");
        console.log("-------------");
        console.log(resultDisplay);
    } else {
        console.log("\nYour sample README file could not be created due to logged error.");
    }
    if (!errorFlag) {
        console.log("\n--------------");
        console.log("End of README.md")
        console.log("\n\nPlease note that you will have to fill in certain values in the License Copyright section.");
        console.log("Using Apache 2.0 License as an example, you would update 'Copyright [yyyy] [name of copyright owner]'.\n");
        console.log("\n\nThank you for using Generate README.md application!\n\n");
    }
}


//   Main
// --------

// Create array of input questions
createInputs();

// Initialize app - Greeting message
init();

// Receive input, transform into markup text, and write sample README file
getAndWrite();
