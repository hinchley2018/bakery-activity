const express = require('express')
const router = express.Router()
const breadsList = require('../models/breads')

// This route renders a list of breads
// 'index' is the name of the file in our views folder to render as this view
// {breadsList: breadsList} passes information that we can use in the 'index' view
//GET /breads -> view
router.get('/', (req, res) => {
    res.render('breads', {
        breadsList: breadsList
    })
})

//GET /breads/new -> view
router.get("/new", (req, res) => {
    res.render("breads/submitBread")
})

//GET /breads/:breadIndex -> view
router.get('/:breadIndex', (req, res) => {
    const breadIndex = req.params.breadIndex
    const bread = breadsList[breadIndex]
    res.render('breads/breadDetails', {
        bread: bread,
        index: breadIndex
    })
})

//POST /breads <-
router.post("/", (req, res) => {
    console.log("POST /breads recieved")
    console.log(req.headers)
    console.log(req.body)
    //TODO: validate this is a valid bread
    //insert that bread from req.body into breads list
    console.log("before", breadsList.length)
    breadsList.push(req.body)
    console.log("after", breadsList.length)
    //either redirect to the index
    // or send the back the id
    res.redirect("/breads")

})


//DELETE /breads/:index <- remove a bread from breadsList
router.delete('/:breadIndex', (req, res) => {

    let index = req.params.breadIndex
    //if it exists
    if (breadsList[index]) {
        //remove from that breadList
        breadsList.splice(index, 1)

        res.send(breadsList)
    }
    else {
        res.render('error404')
    }

})

module.exports = router