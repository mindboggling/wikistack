// Load modules
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parse');
const models = require('./models');  // loads models/index.js
const port = process.env.APP_SERVER_PORT || 3000;
// routes


const app = express();
// Middleware
models.User.sync({})
    .then(function() {
        return models.Page.sync({});
    })
    .then(function() {
        app.listen(port, function() {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch(console.error);

models.db.sync({})
    .then(function() {
        app.listen(port, function() {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch(console.error);

// drops the tables
//models.db.sync({force: true});

