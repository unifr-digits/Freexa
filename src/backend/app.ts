import express from "express";
import bodyParser from "body-parser";
import * as IndexPage from "./routes/index";
import * as ChatPage from "./routes/chat"
import * as path from "path";

class Freexa {

    private webServer;

    constructor() {
        this.webServer = express();
        this.webServer.set('views', path.join(__dirname, 'views'));
        this.webServer.set('view engine', 'hbs');
        this.webServer.use(bodyParser.json());
        this.webServer.use(bodyParser.urlencoded({ extended: false}));
        this.webServer.use(`/`, IndexPage.router);
        this.webServer.use(`/`, ChatPage.router);
    }

    startWebServer(port: number) {
        this.webServer.listen(port, () => {
            console.log(`Web-server listening for requests on port 8080`);
        });        
    }

}

let app = new Freexa();
app.startWebServer(8080);
