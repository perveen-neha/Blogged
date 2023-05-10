const USER = require('../models/user')
const {generateWebToken , verifyUser} = require('../services/authentication')

async function HandleUserSignUp (req, res){
    const {fullName, email, password, profileImage, role} = req.body;
    await USER.create({
        fullName,
        email,
        password,
        profileImage,
        role
    })
    return res.redirect('/')
}

async function HandleUserSignIn (req, res) {
    const {email, password} = req.body;
    try {
        const user = await USER.matchPassword(email,password);
        // console.log(user);
        const token = generateWebToken(user)
        return res.cookie("token" , token).redirect('/')
        
    } catch (error) {
        return res.render('signin' , {
            error : "invalid username/password"
        })
    }

}

module.exports = {
    HandleUserSignUp,
    HandleUserSignIn
}