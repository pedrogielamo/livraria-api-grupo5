const express = require("express");

const app = express();
const PORTA = 3000;

app.get("/",(req, res) => {
    res.send("API da livraria está no ar");
});

app.listen(PORTA, () => {
    console.log("Servidor rodando em https://localhost:" + PORTA);
});