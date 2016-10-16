const mongoose = require('mongoose')

var model = mongoose.model('asset', new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number },
    depth: { type: Number },
    lat: Number,
    lng: Number,
    create_time: { type: Number, default: new Date().getTime() },
    delete_time: Number,
    subjects: [{
        address: { type: String, required: true },
        city: { type: String, required: true },
        rooms: Number,
        size: Number,
        tenant: String,
        monthly_expenditure: { type: Number, required: true },
        monthly_rent: { type: Number, required: true },
        monthly_total: { type: Number, required: true },
        available_from: Number,
        state: { type: String, required: true, enum: ["NEW", "NORMAL", "BAD"] },
        payments: [{
            tenant: { type: String, required: true },
            expected_expenditure: { type: Number, required: true },
            expected_rent: { type: Number, required: true },
            expected_total: { type: Number, required: true },
            actual_total: { type: Number },
            is_paid: Boolean, default: false,
            is_forgiven: Boolean, default: false,
            month: { type: Number, required: true, min: 1, max: 12 },
            year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() }
        }],
        deposits: [{
            tenant: { type: String, required: true },
            deposit: { type: Number, required: true },
            payout: { type: Number, default: 0 },
            payout_time: Number,
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
        interval: {type: String, required: true, enum: ['MONTHLY', 'QUARTERLY', 'BIANNUALLY', 'ANUALLY']},
        starting_month: { type: Number, required: true, min: 1, max: 12 },
        starting_year: { type: Number, required: true, minLength: 4, maxLength: 4, min: new Date().getFullYear() },
        amount: {type: Number, required: true},
        note: String
    }]

}));

var options = {
    onError: function (err, req, res, next) {
        const statusCode = req.erm.statusCode // 400 or 404
        res.status(statusCode).json({
            message: err.message
        })
    }
}

exports.model = model;
exports.options = options;
