'use strict'
const util = require('./../util');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const model = mongoose.model('account', new Schema({
    createTime: {type: Number, default: new Date().getTime()},
    deleteTime: {type: Number, default: null, select: false }
}));

const options = {
    onError: (err, req, res, next) => {
        const statusCode = req.erm.statusCode // 400 or 404
        res.status(statusCode).json({
            message: err.message
        })
    },
    preDelete: (req, res, next) => {
        return util.methodNotAllowedResponse(res);
    },
    preCreate: (req, res, next) => {
        return util.methodNotAllowedResponse(res);
    },
    preUpdate:(req, res, next) => {
        return util.methodNotAllowedResponse(res);
    }
}

exports.model = model;
exports.options = options;
