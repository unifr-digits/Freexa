import { LLMChat } from "../model/llmchat"; // Adjust the import path as necessary

export class LLMChatController {
    static llmChat: LLMChat = new LLMChat();

    static async getChatResponse(prompt: string) {
        const response = await LLMChatController.llmChat.runModel(prompt);
        return response;
    }
}