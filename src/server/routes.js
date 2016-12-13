'use strict';
const express = require('express');
const app = express();
const router = express.Router();
const restify = require('express-restify-mongoose');

// models
const contracts = require('./model/contract.model');
const users = require('./model/user.model');
const assets = require('./model/asset.model');
const tenants = require('./model/tenant.model');
const expenses = require('./model/expense.model');
const payments = require('./model/payment.model');

module.exports = (app) => {
    restify.serve(router, contracts.model, contracts.options);
    restify.serve(router, users.model, users.options);
    restify.serve(router, assets.model, assets.options);
    restify.serve(router, tenants.model, tenants.options);
    restify.serve(router, expenses.model, expenses.options);
    restify.serve(router, payments.model, payments.options);
    app.use(router);
};



