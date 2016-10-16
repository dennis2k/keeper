'use strict'

const mongoose = require('mongoose')

var model = mongoose.model('tenant', new mongoose.Schema({
    name: { type: String, required: true },
    phone: {type: Number},
    email: String,
    notes: String,
    create_time: {type: Number, default new Date().getTime()},
    delete_time: Number
}));

var options = {
    onError: (err, req, res, next) => {
        const statusCode = req.erm.statusCode // 400 or 404
        res.status(statusCode).json({
            message: err.message
        })
    }
}

exports.model = model;
exports.options = options;
