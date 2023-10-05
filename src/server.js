require('dotenv').config();
const express = require('express');
const configVewEngineAndStaticFile = require('./config/viewEngineAndStaticFile');
const webRoute = require('./routes/web.js');
const apiRoute = require('./routes/api.js');

const { MongoClient } = require('mongodb');
const connection = require('./config/database.js');
const fileUpload = require('express-fileupload');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config file upload
app.use(fileUpload());

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

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
    // using mongoose
    await connection();

    // using mongodb drive
    // const url = process.env.DB_HOST_WITH_DRIVER;
    // const client = new MongoClient(url);
    // const dbName = process.env.DB_NAME;

    // // Use connect method to connect to the server
    // await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db(dbName);
    // const collection = db.collection('customers');

    // // collection.insertOne({ name: 'tien' });
    // // collection.insertOne({ address: 'hn', email: 'tienhg201@gmail.com' });
    // collection.insertOne({
    //   name: 'tien',
    //   address: {
    //     province: 'hn',
    //     country: {
    //       name: 'vietnam',
    //       code: 10000,
    //     },
    //   },
    // });

    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log('error', error);
  }
})();
