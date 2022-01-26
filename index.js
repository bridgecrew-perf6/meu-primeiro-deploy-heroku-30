const express = require('express');

const app = express();

const PORT = process.env.PORT || 3002

app.get('/', (req, res) => {
  res.send('Is a LIIIVE!!!');
});

app.listen(PORT, () => console.log(`rodando liso na porta ${PORT}`))

// heroku login
// heroku create meu-1st-deployzin
// heroku apps
// heroku git:remote -a meu-1st-deployzin
// git remote -v
// git add .
// git commit -m "make it better"
// git push heroku master
//  https://meu-1st-deployzin.herokuapp.com