#! /usr/bin/env node

import { program } from "commander";
import { writeFileSync } from "fs";
import { CreateCompletionRequest } from "openai";
import { log } from "./core/log";
import { setup } from "./core/setup";
import { showUsage } from "./core/usage";
import { createCompletion } from "./services/openai";

const main = async () => {
  setup();

  const options = program.opts();

  const output = options.output || "generated.txt";

  const completionInput: CreateCompletionRequest = {
    model: "text-davinci-003",
    prompt: options.prompt,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };

  try {
    log.info("generating output...");

    const promptResult = await createCompletion({
      completionInput,
    });

    if (promptResult.choices[0].text) {
      writeFileSync(output, promptResult.choices[0].text + "\n \n ");
    }
    log.success(`output generated at ${output}`);

    if (promptResult.usage) {
      showUsage(promptResult.usage);
    }
  } catch (e) {
    if (e instanceof Error) {
      writeFileSync(output, e.stack + "\n \n ");
    }
    log.error("error while generating the file...");
    console.error(e);
  }
};

main();
