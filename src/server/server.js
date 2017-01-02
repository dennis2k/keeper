'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const bluebird = require('bluebird')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
mongoose.Promise = require('bluebird');

const app = express()
const router = express.Router()
const cors = require("cors");
const util = require("./util");

//Help serve angular pages
app.use(express.static(path.join(__dirname, '../../export')));

//Setup parsing & cors
app.use(cors({ credentials: true, origin: 'http://localhost:9000' }));
app.use(bodyParser.json({ limit: '50mb' }))
app.use(methodOverride())

app.use((req, res, next) => {
    req = util.unwrapToken(req);
    next();
})

mongoose.connect('mongodb://fiskepind:fiskepind1337@ds033986.mlab.com:33986/keeper-db')

//Routes
require("./routes")(app);
require("./auth/auth.routes")(app);
app.use(router)

//Serve angular 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../export/index.html'))
});

let port = 3000;
//Launch
app.listen(port, () => {
    console.log('Express server listening on port ' + port);
})
