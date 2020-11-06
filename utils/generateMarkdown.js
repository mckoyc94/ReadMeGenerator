// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribute](#contribute)
  * [Testing](#testing)
  * [Questions](#questions)
    
  ## Description
  <p> Test </p>
  
  ## Installation
  <p> Testing </p>

  ## Usage

  ## License

  ## Contribute

  ## Testing

  ## Questions

`;
}

module.exports = generateMarkdown;
