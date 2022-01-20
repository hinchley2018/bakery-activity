// DEPENDENCIES
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

// MONGOOSE
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log(`connected to MongoDB at ${process.env.MONGO_URI}`)
})

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


// ROUTES
app.get('/', function (req, res) {
  res.render('index')
})

// API
const apiRouter = require('./api')
app.use('/api', apiRouter)

// BREADS
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

const bakersController = require('./controllers/bakers_controller')
app.use('/bakers', bakersController)

app.get("*",(req, res) => {
  res.send("Error: page not found")
})

// LISTEN
app.listen(PORT, () => console.log(`listening on port ${PORT}`))