import { Configuration, OpenAIApi, CreateCompletionRequest } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.OPENAI_ORGANIZATION,
});
export const openai = new OpenAIApi(configuration);

type Props = {
  completionInput: CreateCompletionRequest;
};

export const createCompletion = async ({ completionInput }: Props) => {
  try {
    const promptResult = await openai.createCompletion(completionInput);
    return promptResult.data;
  } catch (error) {
    console.log(error);
    throw new Error("Error calling OpenAI");
  }
};
