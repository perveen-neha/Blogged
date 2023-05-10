const {validateToken} = require('../services/authentication')

function checkForAuthenticationCookie(cookiePayload) {
    return (req, res, next) => {
        const cookieValue = req.cookies[cookiePayload]
        if(!cookieValue) return next()
    
        try {
            req.user = validateToken(cookieValue);
            return next();
        } catch (error) {
            console.log(error);
        } 
        return next();    

    }

}

module.exports = {
    checkForAuthenticationCookie,
}