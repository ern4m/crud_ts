import { Request, Response, Application } from "express";
import express = require('express');

var app: Application = express()

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world')
});

app.listen(3000, () => ("listening on 3000"));
