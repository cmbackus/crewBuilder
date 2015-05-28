var mongoose = require('mongoose');
var _ = require('underscore');

var VolModel;

var setName = function(name) {
    return _.escape(name).trim();
};

var VolSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        set: setName
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        min: 0
    },
    address1: {
        type: String,
        trim: true
    },
   address2: {
        type: String,
        trim: true
    },
   city: {
        type: String,
        trim: true
    },
   state: {
        type: String,
        trim: true
    },
   zip: {
        type: Number,
        min:0
    },
   phone: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    contactName: {
        type: String,
        trim: true
    },
    contactNumber: {
        type: String,
        trim: true
    },
    comments: {
        type: String,
        trim: true
    },
    wontmiss: {
        type: String,
        trim: true
    },
    arrivalDeparture: {
        type: String,
        trim: true
    },
    yearsHere: {
        type: String,
        trim: true
    },
    status: {
        type: String,
        trim: true
    },
    modifiedData: {
        type: Date,
        default: Date.now
    },
    createdData: {
        type: Date,
        default: Date.now
    },
    crew: {
        type:String,
        trim:true
    },
    deposit: {
        type:String,
        trim:true
    },
    depositMethod: {
        type:String,
        trim:true
    },
    perks: {
        type:String,
        trim:true
    }

});

VolSchema.methods.toAPI = function() {
    return {
        name: this.name,
        age: this.age,
        crew:this.crew
    };
};


VolSchema.statics.findByCrew = function(crewID, callback) {

    var search = {
        crew: crewID
    };

    return VolModel.find(search).select("name age crew").exec(callback);
};
VolSchema.statics.findAll = function(crew, callback) {


    return VolModel.find().exec(callback);
};

VolModel = mongoose.model('Vol', VolSchema);


module.exports.VolModel = VolModel;
module.exports.VolSchema = VolSchema;