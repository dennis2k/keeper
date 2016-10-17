'use strict'
const util = require("./../util");

module.exports = (model) => {
    return {
        onError: (err, req, res, next) => {
            const statusCode = req.erm.statusCode // 400 or 404
            res.status(statusCode).json({
                message: err.message
            })
        },
        preDelete: (req, res, next) => {
            model
                .findOneAndUpdate({
                    _id: req.params.id,
                    accountId: req.accountId
                }, {
                    deleteTime: new Date().getTime()
                })
                .then(() => {
                    return util.successResponse(res)
                });
        },
        preMiddleware(req, res, next) {
            req.body.accountId = req.accountId;
            next();
        },
        contextFilter(repo, req, done) {
            let query = util.accountFilter(req.accountId);
            query = util.deleteFilter(query);
            done(repo.find(query));
        }
    }

}
