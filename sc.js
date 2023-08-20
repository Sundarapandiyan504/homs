var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

module.exports =  mongoose.model('Com', ComSchema)