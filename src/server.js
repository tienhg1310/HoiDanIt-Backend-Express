require('dotenv').config();
const express = require('express');
const configVewEngineAndStaticFile = require('./config/viewEngineAndStaticFile');
const webRoute = require('./routes/web');
const connection = require('./config/database.js');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine and static file
configVewEngineAndStaticFile(app);

// khai bao route
app.use('/', webRoute);

// test connection

// simple query

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
