const BLOG = require('../models/blog')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, path.resolve('./public/uploads'))
    },
    filename : function (req, file, cb) {
        cb (null , `${Date.now()}${file.originalname}`)
    }
})



async function HandleAddNewBlog(req, res) {
    console.log(req.body);
    const {title, body} = req.body
    const blog = await BLOG.create({
        title, 
        body, 
        coverImage : `/uploads/${req.file.filename}`,
        author: req.user._id,

    })
    res.redirect(`/blog/${blog._id}`)
}

module.exports = {
    HandleAddNewBlog,
    storage,
}