"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const IndexPage = __importStar(require("./routes/index"));
const ChatPage = __importStar(require("./routes/chat"));
const path = __importStar(require("path"));
class Freexa {
    constructor() {
        this.webServer = (0, express_1.default)();
        this.webServer.set('views', path.join(__dirname, 'views'));
        this.webServer.set('view engine', 'hbs');
        this.webServer.use(body_parser_1.default.json());
        this.webServer.use(body_parser_1.default.urlencoded({ extended: false }));
        this.webServer.use(`/`, IndexPage.router);
        this.webServer.use(`/`, ChatPage.router);
    }
    startWebServer(port) {
        this.webServer.listen(port, () => {
            console.log(`Web-server listening for requests on port 8080`);
        });
    }
}
let app = new Freexa();
app.startWebServer(8080);
