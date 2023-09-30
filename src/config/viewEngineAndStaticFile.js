const path = require('path');
const express = require('express');

const configVewEngineAndStaticFile = (app) => {
  app.set('views', path.join('./src', 'views'));
  app.set('view engine', 'ejs');
  // config static file trong thu muc public
  app.use(express.static(path.join('./src', 'public')));
};

module.exports = configVewEngineAndStaticFile;
