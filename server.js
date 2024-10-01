const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const conncetDB = require('./config/database')
const mainRoutes = require('./routes/main')

dotenv.config({path: './config/.env'})


//DB CONNECTION
conncetDB()


const app = express()

//TEMPLATE ENGINE
app.set('view engine', 'ejs')

//STATIC FOLDER
app.use(express.static('public'))

//BODY PARSER
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//ROUTES
app.use('/', mainRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})