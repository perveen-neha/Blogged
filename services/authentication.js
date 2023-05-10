const jwt = require ('jsonwebtoken')
const secret = "superSecretKeyToSign"

 function generateWebToken (user)
{
    console.log(user);
    
    const payload = {
        _id : user._id,
        email : user.email,
        fullName : user.fullName,
        profileImage : user.profileImage,
        role : user.role,
    }

    return jwt.sign(payload,secret)

}

function validateToken (token) {
    const payload = jwt.verify(token,secret)
    return payload;
}

module.exports = {
    generateWebToken,
    validateToken
}

