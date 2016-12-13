'use strict'
var express = require('express'); 
var router = express.Router();
var fsp = require('fs-promise');
var multiparty = require('connect-multiparty');
var busboy = require('connect-busboy')
var multipartyMiddleware = multiparty();
var Converter = require("csvtojson").Converter;

module.exports = (app) => {
    
    router.post('/api/v1/import',multipartyMiddleware,(req,res) => {
        
        var year = req.body.year;
        var month = req.body.month;
        var file = req.files;
        console.log(req.files, req.body)

        console.log(req.body, file);
        res.send();
        return; 
        fsp.readFile(file.path, 'utf8').then((data) => {

            var converter = new Converter({});
            converter.fromFile("./file.csv",function(err,result){
                console.log(result)
                res.send();
            });
        })
        .catch((err) => {
            console.log(err);
            res.send();
        })
    });
    app.use(router);
}

