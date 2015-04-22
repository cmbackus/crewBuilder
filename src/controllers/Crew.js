var _ = require('underscore');
var models = require('../models');

var Vol = models.Vol;

var makerPage = function(req, res) {

    Vol.VolModel.findByCrew("volunteer coordination", function(err, docs) {

        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }
        
        res.render('crew', {vols: docs});
    });
};

var make = function(req, res) {

    if(!req.body.crew) {
        return res.status(400).json({error: "RAWR! crew is required"});
    }
    var crewname=req.body.crew;
    console.log(crewname);
     Vol.VolModel.findByCrew(crewname, function(err, docs) {

        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }
        
        res.render('crew', {vols: docs});
    });
};


module.exports.makerPage = makerPage;
module.exports.make = make;