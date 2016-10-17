'use strict'
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var model = mongoose.model('asset', new Schema({
    accountId: { type: ObjectId, required: true, ref: 'account' },
    name: { type: String, required: true },
    value: { type: Number },
    depth: { type: Number },
    lat: Number,
    lng: Number,
    createTime: { type: Number, default: new Date().getTime() },
    deleteTime: { type: Number, default: null, select: false },
    subjects: [{
        address: { type: String, required: true },
        city: { type: String, required: true },
        rooms: Number,
        size: Number,
        tenant: String,
        monthlyExpenditure: { type: Number, required: true },
        monthlyRent: { type: Number, required: true },
        monthlyTotal: { type: Number, required: true },
        availableFrom: Number,
        state: { type: String, required: true, enum: ["NEW", "NORMAL", "BAD"] },
        payments: [{
            tenant: { type: String, required: true },
            expectedExpenditure: { type: Number, required: true },
            expectedRent: { type: Number, required: true },
            expectedTotal: { type: Number, required: true },
            actualTotal: { type: Number },
            isPaid: { type: Boolean, default: false },
            isForgiven: { type: Boolean, default: false },
            month: { type: Number, required: true, min: 1, max: 12 },
            year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() }
        }],
        deposits: [{
            tenant: { type: String, required: true },
            deposit: { type: Number, required: true },
            payout: { type: Number, default: 0 },
            payoutTime: Number,
            month: { type: Number, required: true, min: 1, max: 12 },
            year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() }
        }],
        expenses: [{
            amount: { type: Number, required: true },
            note: String,
            month: { type: Number, required: true, min: 1, max: 12 },
            year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() }
        }]
    }],
    expenses: [{
        amount: { type: Number, required: true },
        note: String,
        month: { type: Number, required: true, min: 1, max: 12 },
        year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() }
    }],
    recurings: [{
        interval: { type: String, required: true, enum: ['MONTHLY', 'QUARTERLY', 'BIANNUALLY', 'ANUALLY'] },
        startingMonth: { type: Number, required: true, min: 1, max: 12 },
        startingYear: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() },
        amount: { type: Number, required: true },
        note: String
    }]

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
