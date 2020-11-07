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
  <p> ${data.description} </p>
  
  ## Installation
  <p> ${data.install} </p>

  ## Usage
  <p> ${data.usage} </p>

  ## License
  <p> ${data.license} </p>
  
  ## Contribute
  <p> ${data.contribute} </p>

  ## Testing
  <p> ${data.test} </p>

  ## Questions
  <p> For any questions, contact me at </p>
  <p> Email : ${data.email} </p>
  <p> Github : ${data.github} </p>

`;
}

module.exports = generateMarkdown;
