const express = require('express')
const router = express.Router()
const breadsList = require('../models/breads')


router.get('/', (req, res) => {
    res.send(breadsList)
})

router.get('/:breadId', (req, res) => {
    const breadId = req.params.breadId
    const bread = breadsList[breadId]
    res.send(bread)
})

module.exports = router