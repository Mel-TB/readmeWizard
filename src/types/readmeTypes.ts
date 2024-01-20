type Features = {
  name: string;
  description: string;
};

type Tools = {
  name: string;
  url: string;
};

interface ReadmeData {
  projectName: string;
  //   email: string;
  //   repoURL: string;
  //   linkedinURL: string;
  description: string;
  //   features: Features[];
  //   dependencies: string[];
  //   directory: string;
  //   tools: Tools[];
  //   license: string;
  //   author: string;
}

export { ReadmeData, Features, Tools };
