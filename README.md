# Generate README

## Author
Tony Magrady - Berkeley Full-Stack Web Development Bootcamp student, Fall-Winter Session 2023-2024

## Badges
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

Automatically generates a professional README.md file from a developer working on an application project from command line inputs (using Inquirer packageLinks).
Accept different inputs to build the different README sections, including description, installation instructions, usage information, contribution guidelines, test instructions, license type, GitHub username, and email address.

(Technical notes:
Created a separate file of license choices, badge links, and copyright data per license type, to keep the program logic clean (not embedding in program logic Javascript file).
Determined need to gitignore a couple of files that facilitated development but are not intended to include in the submitted assignment, including node_modules folder which is too large for open-source, production-ready repo's.)

## Installation

Email tonymagrady@gmail.com requesting access to the repo with your intent to leverage code.
You will be invited to this repo: [generate-readme](https://github.com/tonymagr/generate-readme)
Git clone to your local machine, checkout your branch, and commence creation of your version.
If you desire to update the master copy, please use above email, and it may be that your enhancements
can be merged in.
In order to prepare your local repo:
- npm init -y  
- npm i(nstall)  (which will install all packages and specifically inquirer and fs.)

## Usage

As the welcome screen GENERATE README.MD mentions -
Provide all required information to automatically generate a sample README.md file for your GitHub project.
You will be presented with several Inquirer package input field requests, as shown in this demostration video:

[Demo Link](https://drive.google.com/file/d/1UdiFv4VxgxyyMBTEzZqN7aLGUjezejlC/view?usp=drive_link/)

Sample README.md result:
[README sample result](./img/README-result.jpg)


## Credits

Source for sample README input data was Dupral Association of philonthropic support:
(https://www.drupal.org/docs/develop/managing-a-drupalorg-theme-module-or-distribution-project/documenting-your-project/readmemd-template/)

## License

The MIT License

Copyright (c) (2023) (Tony Magrady)

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.