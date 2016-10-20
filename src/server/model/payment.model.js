'use strict'
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var model = mongoose.model('payment', new Schema({
    accountId: { type: ObjectId, required: true, ref: 'account', select: false },
    assetId: { type: ObjectId, required: true, ref: 'asset' },
    subjectId: { type: String, required: true },
    createTime: { type: Number, default: new Date().getTime() },
    deleteTime: { type: Number, default: null, select: false },
    tenant: { type: String, required: true },
    expectedExpenditure: { type: Number, required: true },
    expectedRent: { type: Number, required: true },
    expectedTotal: { type: Number, required: true },
    actualTotal: { type: Number },
    isPaid: { type: Boolean, default: false },
    isForgiven: { type: Boolean, default: false },
    month: { type: Number, required: true, min: 1, max: 12 },
    year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() }
}));

const options = require('./base-options')(model);

exports.model = model;
exports.options = options;
