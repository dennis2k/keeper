'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const util = require('./../util');
const assetRepo = require('./asset.model').model;

const model = mongoose.model('tenant', new Schema({
    accountId: { type: ObjectId, required: true, ref: 'account' },
    name: { type: String, required: true },
    phone: { type: Number },
    email: String,
    notes: String,
    createTime: { type: Number, default: new Date().getTime() },
    deleteTime: { type: Number, default: null, select: false }
}));

const options = require('./base-options')(model);
exports.model = model;
exports.options = options;
