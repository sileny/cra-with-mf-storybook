#!/usr/bin/env node
"use strict";
import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { createDirectoryContent } from "./create-directory-content.js";
import { errorMessage, createCompleteMessage } from "./output.js";

export async function createProject(directory, dir) {
  try {
    const templateRootPath = `${dir}/templates`;
    const dirs = fs.readdirSync(templateRootPath);

    const answer = await inquirer.prompt([
      {
        name: "project-name",
        type: "input",
        message: "Project name:",
        validate: function (input) {
          if (/^([A-Za-z\-\_\d])+$/.test(input)) {
            return true;
          }
          return "Sorry, your project name must only include letters, numbers, dashes or underscores.";
        },
      },
      {
        type: 'list',
        message: 'Please select a template:',
        name: 'template-name',
        choices: dirs,
      },
      {
        type: 'list',
        message: 'Please select a tool to continue:',
        name: 'install-tool',
        choices: [
          'npm',
          'yarn',
          'pnpm'
        ]
      }
    ]);
    const projectName = answer["project-name"];
    const projectPath = path.join(directory, projectName);
    fs.mkdirSync(projectPath);
    const templatePath = `${templateRootPath}/${answer['template-name']}`;
    await createDirectoryContent(
      templatePath,
      projectName,
      directory
    );
    process.chdir(projectPath);
    createCompleteMessage(projectName, answer['install-tool']);
  } catch (err) {
    errorMessage(err)
  }
}
