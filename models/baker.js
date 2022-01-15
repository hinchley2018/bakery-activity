const mongoose = require('mongoose')
const {Schema} = mongoose

const bakerSchema = new Schema({
    name: {
        type: String, 
        required: true,
        enum: ["Ross","Rachel","Monica","Phoebe","Chandler","Joey"]
    },
    startDate: {type: Date},
    bio: {type: String}
})

// create model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
