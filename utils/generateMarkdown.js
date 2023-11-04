// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink (license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection (license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown (data) {
  let markdownField = 
  `# ${data.projectTitle}

  ## Author: ${data.author}

  ## Badges
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Description

  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

  ## Installation

  ## Usage

  ## License
  ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
  
  ## How to Contribute

  ## Tests

  ## Questions

  `;
   return markdownField;
}

module.exports = generateMarkdown;
