import inquirer from "inquirer";
import { ReadmeData } from "../types/readmeTypes";

async function promptUser(): Promise<ReadmeData> {
  const answers = await inquirer.prompt<ReadmeData>([
    {
      type: "input",
      name: "projectName",
      message: "Waht is the name of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project",
    },
    {
      type: "confirm",
      name: "confirm",
      message: "Are you sure you want to continue?",
    },
  ]);
  return answers;
}

export { promptUser };
