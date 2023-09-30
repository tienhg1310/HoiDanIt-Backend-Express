const express = require('express');

const router = express.Router();

// khai bao route
router.get('/', (req, res) => {
  res.send('Hello World! & nodemon test');
});

router.get('/hello', (req, res) => {
  // res.send("Hello Tien!");
  res.render('sample.ejs');
});
router.get('/tienhg2001', (req, res) => {
  res.send('<h1>Hello Tienhg2001!</h1>');
});

module.exports = router;
