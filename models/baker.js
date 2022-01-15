const mongoose = require('mongoose')
const breadModel = require('./bread')
const {Schema} = mongoose

const bakerSchema = new Schema({
    name: {
        type: String, 
        required: true,
        enum: ["Ross","Rachel","Monica","Phoebe","Chandler","Joey"]
    },
    startDate: {type: Date},
    bio: {type: String}
}, { toJSON: {virtuals: true}, toObject: {virtuals: true}} )

bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

bakerSchema.post('findOneAndDelete', function() {
    breadModel.deleteMany({baker: this._conditions._id})
        .then(deleteStatus => {
            console.log(deleteStatus)
        })
})

// create model and export
const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker
