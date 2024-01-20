import * as fs from "fs";

function getDependenciesInfo() {
  let dependencyNames: string[] = [];
  let dependencyBadges: string[] = [];

  if (fs.existsSync("package.json")) {
    const packageJson = JSON.parse(fs.readFileSync("package.json", "utf8"));
    const dependencies = packageJson.dependencies || {};
    const devDependencies = packageJson.devDependencies || {};

    const allDependencies = { ...dependencies, ...devDependencies };

    dependencyNames = Object.keys(allDependencies);

    dependencyBadges = dependencyNames.map((dep) => {
      let color = "ffecd1";
      if (!dependencies[dep] && devDependencies[dep]) {
        color = "9d4edd";
      }
      return `![${dep}](https://img.shields.io/badge/${dep}-${color}?style=for-the-badge&logo=${encodeURIComponent(
        dep
      )}&logoColor=white)`;
    });
  }

  return { dependencyNames, dependencyBadges };
}

export { getDependenciesInfo };
