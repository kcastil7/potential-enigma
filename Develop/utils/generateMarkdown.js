// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != "none"){
    return "https://img.shields.io/badge/License-" + license.split(" ")[0] + "-Green.svg"
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license != "none"){
    const linkArr = {
      "MIT":"https://api.github.com/licenses/mit",
      "LGPL-3.0":"https://api.github.com/licenses/lgpl-3.0",
      "Mozilla Public License 2.0": "https://api.github.com/licenses/mpl-2.0",
      "AGPL-3.0": "https://api.github.com/licenses/agpl-3.0",
      "Unlicense": "https://api.github.com/licenses/unlicense",
      "Apache-2.0": "https://api.github.com/licenses/apache-2.0",
      "GPL-3.0": "https://api.github.com/licenses/gpl-3.0"
    }; 

    return linkArr[license];
  }
  return "";

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (license!=""){
  return `![this is an image](${renderLicenseBadge(license)})`;
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}
## Description ${renderLicenseSection(data.license)}
${data.description}
## Installation Instructions
${data.installationInstructions}
## Contribution Guidelines
${data.contributionGuidelines}
## Test Instructions
${data.testInstructions}
## Questions
${data.username}
${data.email}`;
}

module.exports = {generateMarkdown, renderLicenseSection};
