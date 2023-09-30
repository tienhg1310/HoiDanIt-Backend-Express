const express = require('express');
const path = require('path');
require('dotenv').config();

// console.log(process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config static file trong thu muc public
app.use(express.static(path.join(__dirname, 'public')));

// khai bao route
app.get('/', (req, res) => {
  res.send('Hello World! & nodemon test');
});

app.get('/hello', (req, res) => {
  // res.send("Hello Tien!");
  res.render('sample.ejs');
});
app.get('/tienhg2001', (req, res) => {
  res.send('<h1>Hello Tienhg2001!</h1>');
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
