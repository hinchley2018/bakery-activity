const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send('BreadCRUD v.1.0\nPlease see our API documentation to use the BreadCRUD API version 1.'))

// BREADS

const breadsController = require('./controllers/bread_controller')
router.use('/breads', breadsController)

module.exports = router