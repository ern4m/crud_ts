import express, { Express, Request, Response, Application } from "express";

var app: Express = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world')
});

app.listen(3000, () => {
    console.log("listening on 3000")
});
