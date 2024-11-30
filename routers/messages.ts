import express from "express";

const messagesRouter = express.Router();

messagesRouter.get("/", (req , res) => {
    res.send("Hello messages!");
});

messagesRouter.get("/:id", (req , res) => {
    res.send("получаю сообщения");
});

messagesRouter.post("/", (req , res) => {
    console.log(req.body);
    res.send("создание и возвр");
});

export default messagesRouter;