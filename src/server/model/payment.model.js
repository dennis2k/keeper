'use strict'
const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var assetRepo = require('./asset.model').model;
var util = require('./../util');

let s = new Schema({
    accountId: { type: ObjectId, required: true, ref: 'account', select: false },
    assetId: { type: ObjectId, required: true, ref: 'asset' },
    subjectId: { type: String, required: true },
    createTime: { type: Number, default: new Date().getTime() },
    deleteTime: { type: Number, default: null, select: false },
    tenant: { type: String },
    expectedExpenditure: { type: Number, required: true },
    expectedRent: { type: Number, required: true },
    expectedTotal: { type: Number, required: true },
    actualTotal: { type: Number },
    isPaid: { type: Boolean, default: false },
    isForgiven: { type: Boolean, default: false },
    month: { type: Number, required: true, min: 0, max: 11 },
    year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() }
});
//s.index({_id: 1, accountId: 1, assetId: 1, subjectId: 1, month: 1, year: 1 }, { unique: true })

var model = mongoose.model('payment', s);

const options = require('./base-options')(model);
delete options.preDelete;
options.preCreate = (req, res, next) => {
    let assetId = req.body.assetId;
    let subjectId = req.body.subjectId;
    let month = req.body.month || new Date().getMonth();
    let year = req.body.year || new Date().getFullYear();
    assetRepo
        .findOne({ _id: assetId, accountId: req.accountId, 'subjects._id': subjectId }, { 'subjects.$.1': 1 })
        .then((asset) => {
            if (!asset)
                return util.errorResponse(res, "Asset not found");
            if (asset.subjects.length !== 1)
                return util.errorResponse(res, "Subject not found");
            let subject = asset.subjects[0];
            //if(!subject.tenant)
            // return util.errorResponse(res, "Subject does not have a tenant to make a payment");
            req.body.tenant = subject.tenant;
            req.body.expectedExpenditure = subject.monthlyExpenditure || 0;
            req.body.expectedRent = subject.monthlyRent || 0;
            req.body.expectedTotal = subject.monthlyTotal || 0;
            req.body.month = month;
            req.body.year = year;
            next();
        })
        .catch((err) => {
            return util.handleError(err, res, "Error occured during payment creation");
        })
}
exports.model = model;
exports.options = options;
