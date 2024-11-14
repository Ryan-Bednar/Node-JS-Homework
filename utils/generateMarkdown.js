// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';

  if (license === 'MIT') {
    licenseBadge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if (license === 'GNU GPLv3') {
    licenseBadge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  } else if (license === 'Apache 2.0') {
    licenseBadge = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  } else if (license === 'ISC') {
    licenseBadge = 'https://img.shields.io/badge/License-ISC-blue.svg';
  } else if (license === 'None') {
    return '';
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';

  if (license === 'MIT'){
    licenseLink = 'https://opensource.org/licenses/MIT'
  }else if (license === 'GNU GPLv3'){
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  }else if (license === 'Apache 2.0'){
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  }else if (license === 'ISC'){
    licenseLink = 'https://opensource.org/licenses/ISC'
  }else if ('None'){
    return ''
  }

  return licenseLink;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';

  if (license === 'MIT'){
    licenseSection = 'MIT'
  }else if (license === 'GNU GPLv3'){
    licenseSection = 'GNU GPLv3'
  }else if (license === 'Apache 2.0'){
    licenseSection = 'Apache 2.0'
  }else if (license === 'ISC'){
    licenseSection = 'ISC'
  }else if ('None'){
    return ''
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![License Badge](${renderLicenseBadge(data.license)})
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.tableOfContents}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}
`;
}

export default generateMarkdown;
