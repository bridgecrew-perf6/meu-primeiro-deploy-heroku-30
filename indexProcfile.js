const express = require('express');

const app = express();

const PORT = process.env.PORT || 3002
const TEXT = process.env.TEXT

app.get('/', (req, res) => {
  res.send(TEXT, " Procfile funciona mesmo!");
});

app.listen(PORT, () => console.log(`rodando liso na porta ${PORT}`))