var mongoose = require('mongoose');
var _ = require('underscore');

var VolModel;

var setName = function(name) {
    return _.escape(name).trim();
};

var VolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        set: setName
    },
    
    age: {
        type: Number,
        min: 0,
        required: true
    },
    
    owner: 	{
		type: mongoose.Schema.ObjectId,
		required: true,
		ref: 'Account'
	},
    
    createdData: {
        type: Date,
        default: Date.now
    },
    
    crew: {
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

VolSchema.statics.findByOwner = function(ownerId, callback) {

    var search = {
        owner: mongoose.Types.ObjectId(ownerId)
    };

    return VolModel.find(search).select("name age crew").exec(callback);
};

VolSchema.statics.findByCrew = function(crewID, callback) {

    var search = {
        crew: crewID
    };

    return VolModel.find(search).select("name age crew").exec(callback);
};
VolSchema.statics.findAll = function(crew, callback) {


    return VolModel.find().select("name age crew").exec(callback);
};

VolModel = mongoose.model('Vol', VolSchema);


module.exports.VolModel = VolModel;
module.exports.VolSchema = VolSchema;