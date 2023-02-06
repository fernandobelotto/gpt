import { log } from "./log";

export const showUsage = (promptResult: any) => {
  console.log("\n");
  console.log("usage details:");
  log.info(`prompt_tokens ${promptResult.usage.prompt_tokens}`);
  log.info(`completion_tokens ${promptResult.usage.completion_tokens}`);
  log.info(`total_tokens ${promptResult.usage.total_tokens}`);
  console.log("\n");
};
