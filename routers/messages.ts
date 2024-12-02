import express from "express";
import {promises as fs} from  'fs';
import {IMessage} from "../types";

const messagesRouter = express.Router();

const messagesDir = "./messages";

fs.mkdir(messagesDir, { recursive: true }).catch(console.error);

messagesRouter.get("/", async (req, res) => {
    try {
        const files = await fs.readdir(messagesDir);
        const lastFiles = files.slice(-5);

        const messages: (IMessage)[] = [];

        await lastFiles.forEach(async (file) => {
            const filePath = `${messagesDir}/${file}`;
            try {
                const content = await fs.readFile(filePath, "utf-8");
                const message: IMessage = JSON.parse(content);
                messages.push(message);
            } catch (err) {
                console.error(err);
            }
        });

        res.json(messages);

    } catch (err) {
        console.error(err);
    }
});

messagesRouter.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        const datetime = new Date().toISOString();
        const fileName = `${messagesDir}/${datetime}.txt`;

        const messageData = { message, datetime };

        await fs.writeFile(fileName, JSON.stringify(messageData));

        res.json(messageData);
    } catch (err) {
        console.error(err);
    }
});


export default messagesRouter;