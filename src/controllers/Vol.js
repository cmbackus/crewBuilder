var _ = require('underscore');
var models = require('../models');

var Vol = models.Vol;
var Domo=models.Domo;
var makerPage = function(req, res) {

    Vol.VolModel.findAll(req.session.account._id, function(err, docs) {

        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }
        
        res.render('vols', {vols: docs});
    });
};

var makeVol = function(req, res) {

    if(!req.body.name || !req.body.age) {
        return res.status(400).json({error: "RAWR! Both name and age are required"});
    }
    
    var VolData = {
        name: req.body.name,
        age: req.body.age,
        crew:req.body.crew,
        owner: req.session.account._id
    };
    
    var newVol = new Vol.VolModel(VolData);
    
    newVol.save(function(err) {
        if(err) {
            console.log(err);
            return res.status(400).json({error:'An error occurred'}); 
        }

        res.json({redirect: '/volmaker'});
    });
    
};


module.exports.makerPage = makerPage;
module.exports.make = makeVol;