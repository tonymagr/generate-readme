// var arr = [1, 2 , {a : 3}, 4];

// var [x1, x2 , {a : x3}, x4] = arr;

// console.log(x1, x2, x3, x4);


const licenseChoices = [
    { license: 'The MIT License',
        licenseBadge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    },
    { license: 'ISC License (ISC)',
        licenseBadge: `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    },
    { license: 'Apache 2.0 License',
        licenseBadge: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    },
    {
        license: 'Other',
        licenseBadge: `Not Applicable`
    }
  ];

for (const idx of licenseChoices) {
    console.log(idx.license);
    // licenseArray.push(license[0]);
}