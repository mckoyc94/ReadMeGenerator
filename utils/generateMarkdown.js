const badgeMIT =
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";

const badgeISC =
  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";

const badgeIBM =
  "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";

const badgeApache = 
  "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

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
  <p> ${renderBadge(data.license)} </p>
  
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
