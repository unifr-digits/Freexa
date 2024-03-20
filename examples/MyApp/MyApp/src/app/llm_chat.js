"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var replicate_1 = require("replicate");
var dotenv_1 = require("dotenv");
var prompt_sync_1 = require("prompt-sync");
dotenv_1.default.config();
var prompt = (0, prompt_sync_1.default)();
var llm_prompt = prompt('Enter LLM Prompt:');
var replicate = new replicate_1.default({
    auth: '',
    userAgent: 'https://www.npmjs.com/package/create-replicate'
});
var model = 'mistralai/mixtral-8x7b-instruct-v0.1:5d78bcd7a992c4b793465bcdcf551dc2ab9668d12bb7aa714557a21c1e77041c';
var input = {
    top_k: 50,
    top_p: 0.9,
    prompt: llm_prompt,
    temperature: 0.6,
    max_new_tokens: 1024,
    prompt_template: '<s>[INST] {prompt} [/INST] ',
    presence_penalty: 0,
    frequency_penalty: 0,
};
console.log({ model: model, input: input });
console.log('Running...');
replicate.run(model, { input: input }).then(function (output) {
    console.log('Done!', output);
});
// output in a string
