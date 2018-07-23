const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema 
const FeatureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Feature =  mongoose.model('feature', FeatureSchema)