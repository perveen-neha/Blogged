require('dotenv').config()
const express = require('express')
const path = require('path')

const staticRoute = require('./routes/staticRouter')
const userRoute = require('./routes/user')
const blogRoute = require('./routes/blog')
const cookieParser = require('cookie-parser')
const {checkForAuthenticationCookie} = require('./middlewares/authentication')


const connectDB = require('./connect')


const PORT = process.env.PORT || 8000;

const app = express();
connectDB();

app.use(express.urlencoded({extended : false}))
app.use(cookieParser())
app.use(express.static('public'))
app.use(checkForAuthenticationCookie('token'))

app.set('view engine', 'ejs')
app.set('views', path.resolve('views'))

app.use('/', staticRoute)
app.use('/user' , userRoute)
app.use('/blog' , blogRoute)


app.listen(PORT , () => {
    console.log(`app listening on port: ${PORT}`);
})