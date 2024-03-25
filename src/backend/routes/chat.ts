import express from "express";
import { LLMChatController } from "../control/LLMChatController";

let router = express.Router();
router.get(`/chat`,
    (req: express.Request, res: express.Response) => {
        console.log(`Page requested with URL ${req.url}`);

        LLMChatController.getChatResponse(req.query.prompt as string).then( chat_response => {
            console.log(chat_response)
            res.render('chat', { 
                title: 'LLMChat',
                headline: 'Chat',
                response: chat_response
            });
        });
    });

export { router };