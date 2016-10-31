'use strict'

var moment = require('moment');
var jwt = require('jwt-simple');
var config = require('./config');

exports.methodNotAllowedResponse = (res) => {
    return res.status(405).send({
        message: "Method not allowed"
    })
}

exports.successResponse = (res, message, data) => {
    return res.status(200).send({
        success: true,
        message: message,
        data: data
    })
}

exports.errorResponse = (res, message) => {
    console.log("errorResponse",message);
    return res.status(400).send({
        message: message
    })
}

exports.handleError = (err, res, message) => {
    if (err) {
        console.log(err)
        return res.status(400).send({ message: message });
    }
}

exports.unauthorizedResponse = (res, message, err) => {
    if (err) {
        console.log(err)
    }
    return res.status(401).send({
        message: message || "Unauthorized"
    })
}

exports.resourceNotFoundResponse = (res) => {
    return res.status(404).send({
        message: "Resource not found"
    })
}

exports.tokenize = (user) => {
    var payload = {
        accountId: user.accountId,
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(14, 'days').unix()
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
}

exports.unwrapToken = (req) => {
    let auth = req.headers['authorization'];
    if (auth) {
        let token = auth.split('Bearer ')[1];
        let decoded = jwt.decode(token, config.TOKEN_SECRET);
        req.accountId = decoded.accountId;
    }
    return req;
}

exports.accountFilter = (accountId, query) => {
    query = (query) ? query : {};
    query.accountId = accountId;
    return query;
}

exports.deleteFilter = (query) => {
    query = (query) ? query : {};
    query.deleteTime = null;
    return query;
}
