const express = require('express')
const router = express.Router()
const breadModel = require('../models/bread')
const bakerModel = require('../models/baker')

// This route renders a list of breads
// 'index' is the name of the file in our views folder to render as this view
// {breadsList: breadsList} passes information that we can use in the 'index' view
//GET /breads -> view
router.get('/', (req, res) => {

    breadModel.find()
        .then(breads => {
            res.render('breads', {
                breadsList: breads
            })
        })

})

//GET /breads/new -> view
router.get("/new", (req, res) => {
    bakerModel.find()
        .then(foundBakers => {
            res.render("breads/submitBread", {
                bakers: foundBakers
            })
        })
})

//GET /breads/:breadIndex -> view
router.get('/:breadId', (req, res) => {
    const breadId = req.params.breadId
    //if it exists
    breadModel.findById(breadId)
        .populate('baker')
        .then(result => {
            res.render('breads/breadDetails', {
                bread: result,
                index: breadId
            })
        })
        .catch(err => {
            res.render('error404')
        })
})

router.get('/:breadId/edit', (req, res) => {
    const breadId = req.params.breadId
    //if it exists
    breadModel.findById(breadId)
        .then(result => {
            if (result) {
                bakerModel.find()
                    .then(bakers => {
                        res.render('breads/editBread', {
                            bread: result,
                            bakers: bakers,
                            index: breadId
                        })
                    })
            } else {
                res.render("error404")
            }
        })
        .catch(err => {
            res.render("error404")
        })
})

//POST /breads <-
router.post("/", (req, res) => {

    //TODO: validate this is a valid bread
    //insert that bread from req.body into breads list
    if (req.body.hasGluten === "on") {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }

    breadModel.create(req.body)
        .then(result => {

            res.redirect("/breads")
        })
        .catch(err => {
            console.error(err)
            res.status(400).send({ "error": "validation failed" })
        })

})

//UPDATE /breads/:index <- update a bread in the breadsList
router.put('/:breadId', (req, res) => {
    if (req.body.hasGluten === "on") {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    let { breadId } = req.params
    breadModel.findByIdAndUpdate(breadId, req.body, { runValidators: true })
        //sucesss
        .then(result => {
            res.redirect(`/breads/${breadId}`)
        })
        //any errors
        .catch(err => {
            if (err.kind === "ObjectId" && err.name === "CastError") {
                res.status(400).send(`InvalidId: ${err.value}`)
            }
            //if it was validation error
            else if (err.Errors && err.Errors[0].baker.name === "ValidatorError") {
                res.status(400).send(err)
            }

            else { res.status(500).send(err) }

        })
})


//DELETE /breads/:index <- remove a bread from breadsList
router.delete('/:breadId', (req, res) => {

    try {
        breadModel.findByIdAndDelete(req.params.breadId)
            .then(deletedBread => {
                res.redirect('/breads')
            })
    } catch {
        res.render('error404')
    }

})

module.exports = router