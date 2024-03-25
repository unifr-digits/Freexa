import express from "express";


let router = express.Router();
router.get(`/`,
(req: express.Request, res: express.Response) => {
        console.log(`Page requested with URL ${req.url}`);
    res.render('index', {
            title: 'LLMChat',
            welcomeMessage: 'Welcome to Freexa.'   
    });
});

export { router };
