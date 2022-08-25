// const mongoose = require('mongoose');

const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstname:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true, 
        trim: true // removes space
    }
},
{
    timestamps: true
});

const userModel = new model('user', userSchema);

module.exports = userModel;