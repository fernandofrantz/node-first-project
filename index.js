// Importando o express e atribuindo a uma constante
const express = require("express");

// Instanciando um app do express
const app = express();

/*
Chamando a função do app que vai escutar requisições 
em uma determinada porta
*/
app.listen(3000, () =>
  console.log("Aplicação rodando em http://localhost:3000")
);

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.post("/", (req, res) => {
  res.statusCode = 201;
  res.json({ message: "Resource created!" });
});

// outro formato da mesma coisa acima
// app.post("/", (req, res) => {
//   res.status(201).json({ message: "Resource created!" });
// });

// adicionando header na resposta da requisiçao
// app.get("/", (req, res) => {
//   /*
//   Adicionando o header que define o tipo de
//   conteúdo da resposta
//   */
//   res.set("Content-Type", "application/json");
//   res.json({ message: "Testando cabeçalhos" });
// });

// multiplos headers
// res.set({
//   "Content-Type": "text/plain",
//   "Content-Length": "10000",
// });

app.get("/resources/:resource_id/subitens/:item_id", (req, res) => {
  const params = req.params;
  res.json(params);
});

// url ex: GET http://localhost:3000/resources/1/subitens/2

app.get("/resources", (req, res) => {
  const queryParams = req.query;
  res.json(queryParams);
});

// url ex: GET http://localhost:3000/resources?order_by=asc&max_itens=100

// INSTANCIANDO APP DO EXPRESS
// import express from "express";
// const app = express();
// app.use(express.json())

// APÓS INSTANCIAR O EXPRESS É POSSÍVEL ACESSAR O BODY DA REQUISIÇÃO DA SEGUINTE FORMA
// app.post("/resources", (req, res) => {
//   const data = req.body;
//   res.json(data);
// });
