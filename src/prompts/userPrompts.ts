import inquirer from "inquirer";
import { ReadmeData } from "../types/readmeTypes";

async function promptUser(): Promise<ReadmeData> {
  const answers: ReadmeData = {
    projectName: "",
    email: "",
    githubUrl: "",
    linkedin: "",
    description: "",
    features: [],
    dependencyBadges: [],
    dependencyNames: [],
    wantImages: [],
    directory: "",
    license: "",
    author: "",
  };

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
      message: "What is your LinkedIn?",
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

  Object.assign(answers, basicInfo);

  if (answers.wantImages) {
    answers.wantImages = [];
    let addMoreImg = true;

    while (addMoreImg) {
      const { imagesUrl } = await inquirer.prompt([
        {
          type: "input",
          name: "imagesUrl",
          message: "Please enter an image URL (or just press enter to finish)",
        },
      ]);

      if (imagesUrl) {
        answers.wantImages.push(imagesUrl);
      } else {
        addMoreImg = false;
      }
    }
  }

  answers.features = [];
  let addMore = true;
  while (addMore) {
    const { feature } = await inquirer.prompt([
      {
        type: "input",
        name: "feature",
        message:
          "Please enter a feature of your project (or just press enter to finish)",
      },
    ]);

    if (feature) {
      answers.features.push(feature);
    } else {
      addMore = false;
    }
  }

  return answers;
}

export { promptUser };
