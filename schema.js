var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String,
    name:String,
    balence:Number,
});

module.exports =  mongoose.model('User', UserSchema)