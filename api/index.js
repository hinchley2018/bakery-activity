const express = require('express')
const router = express.Router()

// router.use(express.json())

router.get('/', (req, res) => res.send('Please see our API documentation to use the BreadCRUD API.'))

// VERSION 1
const v1Router = require('./v1')
router.use('/v1', v1Router)

router.get('*', (req, res) => res.send('Please see our API documentation to use the BreadCRUD API.'))

module.exports = router