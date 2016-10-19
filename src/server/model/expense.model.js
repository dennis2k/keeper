'use strict'
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var model = mongoose.model('expense', new Schema({
    accountId: { type: ObjectId, required: true, ref: 'account', select: false },
    assetId: { type: ObjectId, required: true, ref: 'asset' },
    subjectId: { type: String, default: null },
    createTime: { type: Number, default: new Date().getTime() },
    deleteTime: { type: Number, default: null, select: false },
    amount: { type: Number, required: true },
    note: String,
    month: { type: Number, required: true, min: 1, max: 12 },
    year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() }
}));

const options = require('./base-options')(model);

exports.model = model;
exports.options = options;
