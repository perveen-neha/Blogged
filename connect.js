require('dotenv').config()

const mongoose = require('mongoose')

const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("database connected");
        
    } catch (error) {
        console.log("error :", error);
    }
}



module.exports = connection

