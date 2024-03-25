"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const LLMChatController_1 = require("../control/LLMChatController");
let router = express_1.default.Router();
exports.router = router;
router.get(`/chat`, (req, res) => {
    console.log(`Page requested with URL ${req.url}`);
    LLMChatController_1.LLMChatController.getChatResponse(req.query.prompt).then(chat_response => {
        console.log(chat_response);
        res.render('chat', {
            title: 'LLMChat',
            headline: 'Chat',
            response: chat_response
        });
    });
});
