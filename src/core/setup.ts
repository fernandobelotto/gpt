import { program } from "commander";

export const setup = () => {
  program
    .name("ai")
    .description(
      `

▄████████  ▄█  
███    ███ ███  
███    ███ ███▌ 
███    ███ ███▌ 
▀███████████ ███▌ 
███    ███ ███  
███    ███ ███  
███    █▀  █▀   
               
               
CLI for OpenAI quick interaction

generate quick output from openai using the command line

`
    )
    .version("0.0.0");

  program
    .requiredOption(
      "-p, --prompt <prompt>",
      "the text use in the prompt to open ai"
    )
    .option(
      "-o, --output <output>",
      "the file name to save the output to. Defaults to generated.txt"
    )
    .option(
      "-t, --temperature <temperature>",
      `Temperature is a value between 0 and 1 that essentially lets you control how confident the model should be when making these predictions. Lowering temperature means it will take fewer risks, and completions will be more accurate and deterministic. Increasing temperature will result in more diverse completions`,
      "0.7"
    );

  program.parse(process.argv);
};
