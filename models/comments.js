const {Schema, model} = require('mongoose')

const commentSchema = new Schema({
    comment : {
        type : String, 
        required : true
    },
    blogId : {
        type : Schema.Types.ObjectId,
        ref : "blog"
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "users"
    },

}, {timestamps : true})

const COMMENTS = model("comment" , commentSchema)

module.exports = COMMENTS