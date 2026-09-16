const express = require("express");

const routes = require("./routes");

const logger = require("./middlewares/logger");


const app = express();
const PORTA = 3000;

// Configuração para permitir receber JSON no corpo das requisições
app.use(express.json());

app.use(logger);

// Uso das rotas
app.use(routes);

app.get("/", (req, res) => {
  res.send("API da livraria está no ar");
});

app.get("/sobre", (req, res) => {
  res.send("Livraria SENAI - Trabalho de PBE, turma 1-2026-SESI_DEV_OC_1");
});

app.listen(PORTA, () => {
  console.log("Servidor rodando em http://localhost:" + PORTA);
});