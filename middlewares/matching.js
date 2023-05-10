const bcrypt = require('bcrypt')

async function matchFunc(email,password) {
    const user = await this.findOne({email})

    if(!user) throw new error ('user not found')

    const match = await bcrypt.compare(password, user.password, )

    if(match) return user
    
    else throw new error('incorrect password')

}

module.exports = {
    matchFunc,
}