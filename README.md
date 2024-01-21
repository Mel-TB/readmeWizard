# 🪄 Readme Magic

  <div align="center">

<a href='mailto:tramimelinda@gmail.com'>![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)</a> <a href='https://www.linkedin.com/in/melindat'>![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)</a>

[![Readme-Magic.png](https://i.postimg.cc/PxTdDznZ/Readme-Magic.png)](https://postimg.cc/Z9sktNRK)

</div>

<br/>

## 📑 Table of Contents

<details>
<summary>Table</summary>

- [Overview](#overview)
- [Implementation Details](#implementation-details)
  - [Features](#features)
- [Installation ](#installation)
  - [Prerequisites](#prerequisites)
  - [Global Installation](#global-installation)
  - [Using Readme Wizard](#using-readme-wizard)
  - [Updating](#updating)
  - [Uninstallation](#uninstalling)
- [API Reference](#api-reference)
  - [`promptUser()`](<#promptuser()>)
  - [`ReadmeData` Interface](#readmeData-interface)
  - [`generateReadme(template: string, data: ReadmeData): string`](#generatereadmetemplate-string-data-readmeData-string)
  - [`getDependenciesInfo()`](#getdependenciesInfo)
  - [Main Function](#main-function)
- [Contributing](#contributing)
- [Interactive Prompts](#interactive-prompts)
- [License](#license)
- [Built With](#built-with)

    </details>

  ## Overview

Readme Magic is a command-line tool that simplifies creating **`README.md`** files for your projects. It uses interactive prompts to collect project information and generates a comprehensive README document.

## Implementation Details

### Features

- Interactive CLI prompts to gather project information.
- Supports dynamic generation of project features, images, and dependency badges.
- Generates a README with sections like Overview, Features, Installation, and more
- Automatically detects project dependencies from **`package.json`**

## Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm (or yarn)

### Global Installation

1. Install Readme Magician globally using npm. This makes the **`readme-magic`** command available system-wide.

```sh
npm install -g readme-magic
```

### Using Readme Wizard

After installation, you can run Readme Magic from any directory on your system.

- To start the interactive prompt and create a README, type:

```sh
readme-magic
```

- Follow the interactive prompt to input your project details
- Upon completion, Readme Magic will generate a **`README.md`** file in your specified directory

### Updating

To update Readme Magic to the latest version, run :

```sh
npm update -g readme-magic
```

### Uninstalling

If you wish to uninstall Readme Magic, use:

```sh
npm uninstall -g readme-magic
```

## API Reference

#### `promptUser()`

This is the primary function that initiates the interactive prompts for the user.

- **Functionality**: It prompts the user to input various details about their project such as project name, author, features, dependencies, etc.
- **Returns**: Promise that resolves to an object of type **`ReadmeData`**

#### `generateReadme(template: string, data: ReadmeData): string`

This function compiles the user input data with a Handlebars template to generate the README content.

- ** Parameters**:
  - **`template`**: A string representing the Handlebars template for README.
  - **`data`**: An object of type ReadmeData containing user-provided details.
- **Returns**: A string that is the compiled README content

#### `ReadmeData` Interface

This TypeScript interface represents the structure of data collected from the user.

- **Fields**:
  - **`projectName` (string)**: The name of the user's project. It's used as the title of the README.
  - **`email` (string)**: The email address of the author of the project, use for contact badge in the README.
  - **`githubUrl` (string)**: The URL of the project's Github repository. This is included to provide users with a link to the source code.
  - **`linkedin` (string)**: Linkedin name prfile of the author of the project, use for contact badge in the README.
  - **`description` (string)**: A brief description of the project, outlining its purpose and key features.
  - **`features` (array of strings)**: A list of notable features of the project. Each feature is listed as a bullet point in the README.
  - **`wantImage` (array of strings)**: URLs of images the user wants to include in the README. These are displayed as embedded images in the document.
  - **`dependencyBadges` (array of strings)**: Badges representing the project's dependencies, typically used for visual representation in the README.
  - **`dependencyNames` (array of strings)**: The names of the project's dependencies. These might be used to provide detailed information about each dependency.
  - **`directory` (string)**: The directory path of the project, which can be used to provide cloning and setup instructions.
  - **`license` (string)**: The type of license under which the project is released, displayed in the README.
  - **`author` (string)**: The name of the project author or maintainer.

#### `getDependenciesInfo()`

This function extracts dependency information from the project's **`package.json`**.

- **Returns**: An object containing arrays of **`dependencyNames`** and **`dependencyBadges`**.

#### Main Function

- Orchestrates the workflow: prompts user, gets dependencies info, and generates README.

## Interactive Prompts

The **`promptUser()`** function uses inquirer to ask the user a series of questions. Here's an overview:

- **Project Name**: "What is the name of your project?"
- **Email**: "What is your email?"
- **Linkedin**: "What is your LinkedIn?"
- **Github Url**: "What is the URL of your repo?"
- **Description**: "Please enter a description of your project: "
- **Package Manager**: "Select a package manager: "
- **Directory**: "What is the directory of your project?"
- **Author**: "Who is the author of your project?"
- **Want Images**: "Do you want to include images?" - ""Please enter an image URL"
- **Features**: "Please enter a feature of your project "

Each prompt corresponds to a field in the **`ReadmeData`** object. The responses are used to populate this object, which is then utilized by **`generateReadme`** to create the README file.

## 🤝 Contributing

Contributions to improve this package are welcome. Please adhere to the project's coding standards and commit guidelines.

## License

[MIT License](https://github.com/Mel-TB/readmeWizard/tree/main?tab=MIT-1-ov-file) © [Melinda Trami](https://melindatrami.com)

## ⚒️ Built With

- ![handlebars](https://img.shields.io/badge/handlebars-F0EDCF?style=for-the-badge&logo=handlebars&logoColor=white)
- ![inquirer](https://img.shields.io/badge/inquirer-F0EDCF?style=for-the-badge&logo=inquirer&logoColor=white)
- ![@types/inquirer](https://img.shields.io/badge/@types/inquirer-40A2D8?style=for-the-badge&logo=%40types%2Finquirer&logoColor=white)
- ![@types/node](https://img.shields.io/badge/@types/node-40A2D8?style=for-the-badge&logo=%40types%2Fnode&logoColor=white)
- ![typescript](https://img.shields.io/badge/typescript-40A2D8?style=for-the-badge&logo=typescript&logoColor=white)

  ***

  _🌟 This README was generated with 💖 by [Readme Magic](https://github.com/Mel-TB/readmeWizard)_
