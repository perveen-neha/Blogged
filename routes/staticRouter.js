const express = require('express');
const router = express.Router();
const BLOG = require('../models/blog')

router.get('/', async (req, res)=>{
    const allBlogs = await BLOG.find({})
    res.render('home', {
        user : req.user,
        blogs : allBlogs
    })
})


module.exports = router;