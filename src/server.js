require('dotenv').config();
const express = require('express');
const configVewEngineAndStaticFile = require('./config/viewEngineAndStaticFile');
const webRoute = require('./routes/web');
// console.log(process.env);

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use('/home', webRoute);

// config template engine and static file
configVewEngineAndStaticFile(app);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
