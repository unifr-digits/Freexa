import Replicate from 'replicate';
//import dotenv from 'dotenv';

// dotenv.config()

export class LLMReplicate {
  replicate: Replicate;
  model: any;
  prompt: string = "Who are you"

  constructor() {
    this.replicate = new Replicate({
      auth: `Token ${process.env['REPLICATE_API_TOKEN']}`,
      userAgent: 'https://www.npmjs.com/package/create-replicate'
    });
    this.model = 'mistralai/mixtral-8x7b-instruct-v0.1:5d78bcd7a992c4b793465bcdcf551dc2ab9668d12bb7aa714557a21c1e77041c';
  }

  async runModel(userprompt: string) {
    const input = {
      top_k: 50,
      top_p: 0.9,
      prompt: userprompt,
      temperature: 0.6,
      max_new_tokens: 1024,
      prompt_template: '<s>[INST] {prompt} [/INST] ',
      presence_penalty: 0,
      frequency_penalty: 0,
    };


    const output = await this.replicate.run(this.model, { input });

    let formattedOutput = '';
    if (output && Array.isArray(output)) {
      for (let e of output) {
        formattedOutput += e;
      }
    } else {
      // Handle case where output is not as expected
      formattedOutput = 'Unexpected output structure.';
    }
    return formattedOutput;
  }
}
