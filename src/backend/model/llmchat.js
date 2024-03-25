"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LLMChat = void 0;
const replicate_1 = __importDefault(require("replicate"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class LLMChat {
    constructor() {
        this.prompt = "Who are you?";
        this.replicate = new replicate_1.default({
            auth: process.env['REPLICATE_API_TOKEN'],
            userAgent: 'https://www.npmjs.com/package/create-replicate'
        });
        this.model = 'mistralai/mixtral-8x7b-instruct-v0.1:5d78bcd7a992c4b793465bcdcf551dc2ab9668d12bb7aa714557a21c1e77041c';
    }
    runModel(userprompt) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const output = yield this.replicate.run(this.model, { input });
            let formattedOutput = '';
            if (output && Array.isArray(output)) {
                for (let e of output) {
                    formattedOutput += e;
                }
            }
            else {
                // Handle case where output is not as expected
                formattedOutput = 'Unexpected output structure.';
            }
            return formattedOutput;
        });
    }
}
exports.LLMChat = LLMChat;
