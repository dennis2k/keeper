'use strict'
const util = require("./../util");

module.exports = (model) => {
    return {
        onError: (err, req, res, next) => {
            let message = err.message;
            if(err.code === 11000)
                message = "Duplicate entry"
            util.handleError(err, res,  message);
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
