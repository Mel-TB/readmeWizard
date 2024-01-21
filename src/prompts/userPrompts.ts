import inquirer from "inquirer";
import { ReadmeData } from "../types/readmeTypes";
import { promptForList } from "./promptForList.js";

async function promptUser(): Promise<ReadmeData> {
  const basicInfo = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "What is the name of your project?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn username (after 'linkedin.com/in/')? ",
    },
    {
      type: "input",
      name: "githubUrl",
      message: "What is the URL of your repo?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project: ",
    },
    {
      type: "list",
      name: "package",
      message: "Select a package manager: ",
      choices: [
        {
          name: "npm",
          value: "npm",
          checked: true,
        },
        {
          name: "yarn",
          value: "yarn",
        },
      ],
    },
    {
      type: "input",
      name: "directory",
      message: "What is the directory of your project?",
    },
    {
      type: "input",
      name: "author",
      message: "Who is the author of your project?",
    },
    {
      type: "confirm",
      name: "wantImages",
      message: "Do you want to include images?",
    },
  ]);

  const answers: ReadmeData = { ...basicInfo };

  if (answers.wantImages) {
    answers.wantImages = await promptForList(
      "Please enter an image URL",
      "imagesUrl"
    );
  }

  answers.features = await promptForList(
    "Please enter a feature of your project ",
    "features"
  );
  return answers;
}

export { promptUser };
