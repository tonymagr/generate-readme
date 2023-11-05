// generateMarkdown function uses individual object items from input parameter in container string 
// that will be the contents of the sample README file.

// ----------------------------------
// Created license badge and links WITHOUT the use of TODO functions below.
// Passed all license data as part of input parameter. Source object is in licenseChoices.js
// ----------------------------------

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge (license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink (license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection (license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  let markdownField = 
  `# ${data.projectTitle}

  ## Author: ${data.author}

  ## Badges
  ${data.licenseBadge} <br>
  (Badge links to website containing license information.)

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ${data.copyright}

  ## How to Contribute
  ${data.contribution}

  ## Tests
  ${data.testInstructions}

  ## Questions
  GitHub profile: [Profile for ${data.gitHubUsername}](https://github.com/${data.gitHubUsername}) <br> <br>
  Please email me at ${data.emailAddress} with any additional questions.
  `;
   return markdownField;
}

module.exports = generateMarkdown;
