// importando o express e atribuindo a uma constante

const express = require('express');

const app = express();

/*
chamando a função do app que irá executar requisições em uma determinada porta
*/

// criando uma requisição com GET
app.get('/', (req, res) => {
  res.send('Hello World!'); 
});

// chamando método listen que indica que o servidor deve escutar, neste caso a porta 3000
//app.listen(3000, () => console('aplicação rodando em http://localhost:3000'));
