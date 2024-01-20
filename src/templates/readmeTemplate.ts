const readmeTemplate = `
  # {{projectName}}

  <div align="center">

<a href='mailto:{{email}}>![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a> <a href='https://www.linkedin.com/in/{{linkedin}}'>![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a>


{{#each wantImages}}
[![Image]({{this}})]({{this}})
{{/each}}
</div>


<br/>

## Table of Contents

<details>
<summary>Table</summary>

- [Overview](#overview)
- [Implementation Details](#implementation-details)
  - [Features](#features)
- [Installation & Setup](#installation-and-setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Setup](#setup)
- [Running the Application](#running-the-application)
- [Built With](#built-with)
- [Notes for Customization](#notes-for-customization)
</details>

  ## Description
  {{description}}
  

  ### Features
{{#each features}}
  - {{this}}
{{/each}}

## Installation And Setup

## Prerequisites
Before using this project, you must have the following installed:

{{#each dependencyNames}}
- **{{this}}**: https://www.npmjs.com/package/{{this}}
{{/each}}

### Installation

To get a development environment running: 

1. Clone the project and install its dependencies using {{package}}

\`\`\`sh
git clone {{githubUrl}}
\`\`\`

2. Navigate to the project's directory:
\`\`\`sh
cd {{directory}}
\`\`\`

3. Install the project's dependencies:
\`\`\`sh
{{package}} install
\`\`\`

### Setup


## Running The Application

\`\`\`sh
{{package}} start
\`\`\`


## Built With
{{#each dependencyBadges}}
  - {{this}}
{{/each}}
  `;

export { readmeTemplate };
