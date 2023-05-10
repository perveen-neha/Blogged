const express = require('express')
const router = express.Router();
const multer = require('multer')
const {HandleAddNewBlog , storage} = require('../controllers/blog')
const BLOG = require('../models/blog')
const COMMENTS = require('../models/comments')

const upload = multer({storage})
router.get('/add-new', (req, res) => {
    res.render('addBlog',{
         user : req.user
    })
})

router.post('/' ,upload.single('coverImage'), HandleAddNewBlog);

router.get('/:id' , async(req,res) => {
    const bid = req.params.id
    const blog = await BLOG.findById(bid).populate('author')
    const comments = await COMMENTS.find({}).populate('author')
    res.render('blog', {
        user : req.user,
        blog : blog,
        comments : comments
    })
})

router.post('/comments/:blogid', async (req , res) => {
    
    await COMMENTS.create({
        comment : req.body.comment,
        blogId : req.params.blogid,
        author :req.user._id
    })

    res.redirect(`/blog/${req.params.blogid}`)
})

module.exports = router