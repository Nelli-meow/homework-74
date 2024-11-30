import express from "express";

const app = express();
const port = 8000;
//
// app.get("/", (req , res) => {
//     res.send("Hello messages!");
// });
//
// app.get("/messages/:id", (req , res) => {
//     res.send("получаю сообщения");
// });
//
// app.post("/messages", (req , res) => {
//     res.send("создание и возвр");
// });

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})