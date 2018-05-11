const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const db = require('./db/connection');

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

require('./routes')(app, db);

app.listen(port, () => {
    console.log('Live on port ' + port);
})
