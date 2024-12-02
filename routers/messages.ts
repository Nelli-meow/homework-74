import express from "express";
import {promises as fs} from  'fs';

const messagesRouter = express.Router();


const messagesDir = "./messages";

fs.mkdir(messagesDir).catch(console.error);

messagesRouter.get("/", async  (req , res) => {
    const { message } = req.body;

    const datetime = new Date().toISOString();
    const fileName = `./${datetime}.txt`;

    await fs.writeFile(fileName, JSON.stringify('hello world!'));

    const messageData = { message, datetime };

    res.send(messageData);
});

messagesRouter.post("/", (req , res) => {
    console.log(req.body);
    res.send("создание и возвр");
});

export default messagesRouter;