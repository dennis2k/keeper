'use strict'
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var model = mongoose.model('asset', new Schema({
    accountId: { type: ObjectId, required: true, ref: 'account', select: false },
    address: { type: String, required: true },
    city: { type: String, required: true },
    value: { type: Number },
    depth: { type: Number },
    lat: Number,
    lng: Number,
    createTime: { type: Number, default: new Date().getTime() },
    deleteTime: { type: Number, default: null, select: false },
    subjects: [{
        identifier: { type: String, required: true },
        rooms: Number,
        size: Number,
        transactionText: String,
        tenant: { type: ObjectId, ref: 'tenant', default: null },
        monthlyExpenditure: { type: Number, required: true },
        monthlyRent: { type: Number, required: true },
        monthlyTotal: { type: Number, required: true },
        availableFrom: Number,
        state: { type: String, required: true, enum: ["NEW", "NORMAL", "BAD"] },
        deposits: [{
            tenant: { type: ObjectId, required: true, ref: 'tenant' },
            deposit: { type: Number, required: true },
            payout: { type: Number, default: 0 },
            payoutTime: Number,
            month: { type: Number, required: true, min: 1, max: 12 },
            year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() }
        }]
    }],
    recurings: [{
        name: { type: String, required: true },
        interval: { type: String, required: true, enum: ['MONTHLY', 'QUARTERLY', 'BIANUALLY', 'ANUALLY'] },
        startingMonth: { type: Number, required: true, min: 1, max: 12 },
        startingYear: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() },
        amount: { type: Number, required: true },
        note: String
    }]

}));

const options = require('./base-options')(model);
exports.model = model;
exports.options = options;
