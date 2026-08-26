const express = require("express");

const app = express();
const PORTA = 3000;

app.get("/", (req, res) => {
    res.send("API da livraria está no ar");
});

app.get("/sobre", (req, res) => {
    res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
});

app.listen(PORTA, () => {
    console.log("Servidor rodando em https://localhost:" + PORTA);
});

