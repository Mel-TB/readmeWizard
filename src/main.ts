#!/usr/bin/env node

import * as fs from "fs";
import { readmeTemplate } from "./templates/readmeTemplate.js";
import { promptUser } from "./prompts/userPrompts.js";
import { generateReadme } from "./utils/generateReadme.js";
import { getDependenciesInfo } from "./utils/packageUtils.js";

async function main() {
  const userInput = await promptUser();
  const { dependencyNames, dependencyBadges } = getDependenciesInfo();

  userInput.dependencyBadges = dependencyBadges;
  userInput.dependencyNames = dependencyNames;

  const template = readmeTemplate;
  const readmeContent = generateReadme(template, userInput);
  fs.writeFileSync("README.md", readmeContent);
  console.log("README.md created successfully");
}

main();
