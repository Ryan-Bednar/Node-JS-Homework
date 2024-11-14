// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if ('MIT'){
        return 'https://img.shields.io/badge/License-MIT-yellow.svg'
    }else if ('GNU GPLv3'){
        return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    }else if ('Apache 2.0'){
        return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    }else if ('ISC'){
        return 'https://img.shields.io/badge/License-ISC-blue.svg'
    }else if ('None'){
        return ''
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ('MIT'){
    return 'https://opensource.org/licenses/MIT'
  }else if ('GNU GPLv3'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }else if ('Apache 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }else if ('ISC'){
    return 'https://opensource.org/licenses/ISC'
  }else if ('None'){
    return ''
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ('MIT'){
    return 'MIT'
  }else if ('GNU GPLv3'){
    return 'GNU GPLv3'
  }else if ('Apache 2.0'){
    return 'Apache 2.0'
  }else if ('ISC'){
    return 'ISC'
  }else if ('None'){
    return ''
  }
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
