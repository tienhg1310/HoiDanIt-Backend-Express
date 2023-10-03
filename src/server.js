require('dotenv').config();
const express = require('express');
const configVewEngineAndStaticFile = require('./config/viewEngineAndStaticFile');
const webRoute = require('./routes/web.js');
const apiRoute = require('./routes/api.js');
const connection = require('./config/database.js');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config file upload
app.use(fileUpload())

// config res.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

// config template engine and static file
configVewEngineAndStaticFile(app);

// khai bao route
app.use('/', webRoute);
app.use('/v1/api/', apiRoute);

// xu li dong bo connect db sau do moi chay server
(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log('error');
  }
})();
