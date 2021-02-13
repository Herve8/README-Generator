// function to generate markdown for README
function generateReadMe(data) {
    return`
  # Project Title 
  ${data.Title}
  
  # Description
  ${data.Description}

  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#licence)
  * [Contribution](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [GithubAccount] (#githubAccount)
  
  # Installation
  The following necessary dependencies must be installed to run the application properly: ${data.Installation}

  # Usage
  How to use this application. ${data.Usage}

  # Licence
  This project is licence under the ${data.Licence} licence.
  [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://github.com/Herve8/README-Generator)

  # Contribution
  ​Contributors: ${data.Contribution}

  # Tests
  To run tests, you need to run the following command: ${data.Test}

  # Questions
  If you have any questions about the repo, please contact ${data.UserName} directly ${data.Email}.

  # Github Account
  Alternatively you can view my README codes on ${data.githubAccount}
  `
  }
  
  module.exports = generateReadMe;