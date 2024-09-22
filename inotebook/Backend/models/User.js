let mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true
    },
    timestamp:{
        type: Date,
        default: Date.now
    },
});
const User = mongoose.model('user', UserSchema);
module.exports = mongoose.model('user', UserSchema);