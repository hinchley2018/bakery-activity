// DEPENDENCIES
const express = require('express')
const app = express()

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

// ROUTES
app.get('/', function (req, res) {
  res.send('Hello World')
})

// BREADS
const breadsController = require('./controllers/breads_controller')
app.use('/breads', breadsController)

// LISTEN
app.listen(PORT, () => console.log(`listening on port ${PORT}`))