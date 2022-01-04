// DEPENDENCIES
const express = require('express')
const app = express()
const methodOverride = require('method-override')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

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

// BREADS
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

app.get("*",(req, res) => {
  res.send("Error: page not found")
})

// LISTEN
app.listen(PORT, () => console.log(`listening on port ${PORT}`))