import Replicate from 'replicate';
import dotenv from 'dotenv';
import promptSync from 'prompt-sync';

dotenv.config();

const prompt = promptSync();

const llm_prompt: string = prompt('Enter LLM Prompt:');

const replicate = new Replicate({
  auth: 'r8_fC2A5cpPqmpPPpUwIdcxWaFnyX540tt1XXooY',
  userAgent: 'https://www.npmjs.com/package/create-replicate'
});
type ModelType = `${string}/${string}` | `${string}/${string}:${string}`;
const model: ModelType = 'mistralai/mixtral-8x7b-instruct-v0.1:5d78bcd7a992c4b793465bcdcf551dc2ab9668d12bb7aa714557a21c1e77041c';

const input = {
  top_k: 50,
  top_p: 0.9,
  prompt: llm_prompt,
  temperature: 0.6,
  max_new_tokens: 1024,
  prompt_template: '<s>[INST] {prompt} [/INST] ',
  presence_penalty: 0,
  frequency_penalty: 0,
};

console.log({ model, input });
console.log('Running...');

replicate.run(model, { input }).then((output: any) => {
  console.log('Done!', output);
});

// output in a string
