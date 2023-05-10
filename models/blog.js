const {Schema, model} = require('mongoose')
const mongoose = require('mongoose')

const blogSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true
    },
    coverImage : {
        type : String,
        required : false
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "users",
        required : true,
    }

}, {timestamps : true})

const BLOG = mongoose.model("blog", blogSchema);

module.exports = BLOG

