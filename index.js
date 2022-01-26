const express = require('express');

const app = express();

const PORT = process.env.PORT || 3002

app.get('/', (req, res) => {
  res.send('Está vivo!!!');
});

app.listen(PORT, () => console.log(`rodando liso na porta ${PORT}`))