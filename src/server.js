require('dotenv').config();
const express = require('express');
const configVewEngineAndStaticFile = require('./config/viewEngineAndStaticFile');
const webRoute = require('./routes/web');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine and static file
configVewEngineAndStaticFile(app);

// khai bao route
app.use('/', webRoute);

// test connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  database: 'tienhg2001',
  user: 'root',
  password: 'tienhg2001',
});

// simple query
connection.query('SELECT * FROM Users u', function (err, results, fields) {
  console.log('>>> result', results); // results contains rows returned by server
  console.log('>>> fields', fields); // fields contains extra meta data about results, if available
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
