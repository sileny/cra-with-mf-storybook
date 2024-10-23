import chalk from "chalk";

export function introMessage() {
  console.log("", "\n", chalk.yellow.bold("CREATE REACT APP"));
  console.log(
    "",
    "\n",
    "Let's create a new React app!",
    "\n"
  );
}

export function createCompleteMessage(projectName, command) {
  console.log(
    "",
    "\n",
    "Project",
    chalk.yellow.bold(projectName),
    "was successfully created!",
    "\n",
    "\n",
    `now run ${chalk.bgYellow.black.bold(`cd ${projectName}`)} to get started!`,
    "\n",
    "\n",
    chalk.yellow.bold("INSTALL"),
    `: ${command} install`,
    "\n",
    chalk.yellow.bold("START"),
    `: ${command} start`,
    "\n",
    chalk.yellow.bold("BUILD"),
    `: ${command} build`,
    "\n",
    chalk.yellow.bold("STORYBOOK"),
    `: ${command} storybook`,
    "\n",
    chalk.yellow.bold("BUILD STORYBOOK"),
    `: ${command} build-storybook`,
    "\n"
  );
}


export function errorMessage(error) {
  console.error(chalk.red.bold("The following error occurred:", error));
}

export function nodeErrorMessage() {
  console.error(
    "\n",
    chalk.red.bold(
      `Meltwater app boilerplate requires Node 18.0.0 or higher. Your version is ${process.versions.node}.`
    ),
    "\n"
  );
}
