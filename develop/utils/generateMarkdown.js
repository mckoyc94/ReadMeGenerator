const badgeMIT =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

const badgeISC =
  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

const badgeIBM =
  "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
const badgeApache = 
  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  
const badgeMozilla = 
  "[![License: MPL-2.0](https://img.shields.io/badge/License-MPL-blue.svg)](https://opensource.org/licenses/MPL-2.0)";


  const renderBadge = (badge) => {
  if (badge === "MIT") {
    return badgeMIT;
  } else if (badge === "ISC") {
    return badgeISC;
  } else if (badge  === "IBM"){
    return badgeIBM;
  } else if (badge === "Apache"){
    return badgeApache
  } else {
    return badgeMozilla
  }
};

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderBadge(data.license)}
  
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
  <p> This app is covered under the ${data.license} License </p>
  
  ## Contribute
  <p> ${data.contribute} </p>

  ## Testing
  <p> ${data.test} </p>

  ## Questions
  <p> For any questions, contact me at </p>
  <h3> Email : </h3>
  <strong>${data.email}</strong>
  <br></br>
  <h3> Github Account:</h3>
  
  
  [${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
