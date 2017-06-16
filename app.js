// Load modules
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const models = require('./models');  // loads models/index.js
const port = process.env.APP_SERVER_PORT || 3000;

const app = express();
// Middleware
// Logging
app.use(logger);


models.User.sync({force: true})
    .then(function () {
        return models.Page.sync({});
    })
    .then(function () {
        app.listen(port, function () {
            console.log(`Server is listening on port ${port}`);
        });
    })
    .catch(console.error);


