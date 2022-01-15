const mongoose = require('mongoose')
const {Schema} = mongoose

const breadSchema = new Schema({
    name: { type: String, required: true },
    hasGluten: Boolean,
    image: { type: String, default: 'http://placehold.it/500x500.png' },
    baker: { 
        type: Schema.Types.ObjectId, 
        ref: 'Baker'
    }
})

const Bread = mongoose.model("Bread", breadSchema)

module.exports = Bread