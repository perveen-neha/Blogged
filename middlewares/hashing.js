const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

async function hash(next) {
    const user = this;

    if(user.isModified('password')){
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(user.password, salt);
            user.password = hashedPassword;
            next();
        } catch (error) {
            console.log('error : ' , error);
        }
    }
    next();
}

module.exports = hash