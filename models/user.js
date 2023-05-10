const mongoose = require('mongoose')
const {Schema, model} = require('mongoose')
const hash = require('../middlewares/hashing')
const {matchFunc} = require('../middlewares/matching')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    fullName : {
        type : String,
        required : true,
    },
    email : {
        type : String, 
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    profileImage : {
        type : String,
        default : '/userAvatar.png'
    },
    role : {
        type : String, 
        enum : ["USER", "ADMIN"],
        default : "USER"
    }

}, {timeStamps : true})

userSchema.pre('save' , hash)
userSchema.static("matchPassword", matchFunc)

const USER = mongoose.model('users' , userSchema);

module.exports = USER;