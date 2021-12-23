const express = require('express')
const router = express.Router()
const breadsList = require('../models/breads')

// This route renders a list of breads
// 'index' is the name of the file in our views folder to render as this view
// {breadsList: breadsList} passes information that we can use in the 'index' view
router.get('/', (req, res) => {
    res.render('index', {
        breadsList: breadsList
    })
})

router.get('/:breadId', (req, res) => {
    const breadId = req.params.breadId
    const bread = breadsList[breadId]
    res.render('breadDetails', {
        bread: bread
    })
})

module.exports = router