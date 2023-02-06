import chalk from "chalk";

export const log = {
  info: (message: string | string[]) => console.log(chalk.blue(message)),
  error: (message: string | string[]) => console.error(chalk.red(message)),
  success: (message: string | string[]) => console.log(chalk.green(message)),
};
