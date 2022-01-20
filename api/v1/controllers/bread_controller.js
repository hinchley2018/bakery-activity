const express = require('express')
const router = express.Router()
const breadModel = require('../../../models/bread')
// const bakerModel = require('../models/baker')

router.use(express.json())

router.get('/', async (req,res) => {
    try {
        const breads = await breadModel.find()
        res.json(breads)
    } catch (err) {
        res.status(404).send(err)
    }
})

router.get('/:id', async (req,res) => {
    try {
        const bread = await breadModel.findOne({_id: req.params.id}).orFail()
        res.json(bread)
    } catch (err) {
        res.status(404).send(err)
    }
})

router.post("/", (req, res) => {

    breadModel.create(req.body)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            console.error(err)
            res.status(400).send({ "error": "validation failed" })
        })

})

router.put('/:id', async (req,res) => {
    try {
        const bread = await breadModel.updateOne({_id: req.params.id}, req.body).orFail()
        res.json(bread)
    } catch (err) {
        res.status(404).send(err)
    }
})

router.delete('/:id', async (req,res) => {
    try {
        const bread = await breadModel.deleteOne({_id: req.params.id}).orFail()
        res.json(bread)
    } catch (err) {
        res.status(404).send(err)
    }
})

module.exports = router