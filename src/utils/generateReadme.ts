import Handlebars from "handlebars";
import { ReadmeData } from "../types/readmeTypes";

function generateReadme(template: string, data: ReadmeData): string {
  const compiledTemplate = Handlebars.compile(template);
  return compiledTemplate(data);
}

export { generateReadme };
