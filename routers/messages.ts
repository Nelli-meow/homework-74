import express from "express";

const messagesRouter = express.Router();


messagesRouter.get("/", (req , res) => {
    res.send("Hello messages!");
});

messagesRouter.get("/messages/:id", (req , res) => {
    res.send("получаю сообщения");
});

messagesRouter.post("/messages", (req , res) => {
    res.send("создание и возвр");
});

export default messagesRouter;