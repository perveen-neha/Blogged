const express = require('express')
const router = express.Router()
const {HandleUserSignUp, HandleUserSignIn} = require('../controllers/user')

router.get('/signup', (req, res) => {
    return res.render('signup')
} );
router.post('/signup', HandleUserSignUp);

router.get('/signin', (req, res) => {
    return res.render('signin')
} );

router.post('/signin', HandleUserSignIn);

router.get('/logout', (req, res) => {
    res.clearCookie("token").redirect('/')
})


module.exports = router

