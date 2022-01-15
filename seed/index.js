// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

// MONGOOSE
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log(`connected to MongoDB at ${process.env.MONGO_URI}`)
})

const bakerModel = require('../models/baker.js')
console.log(bakerModel)

const bakersArray = [
    {
      name: 'Monica',
      startDate: '1994-09-22',
      bio: 'Prefers napkins folded a particular way.'
    },
    {
      name: 'Ross',
      startDate: '1995-09-21',
      bio: 'Loves dinosaurs. Is currently on a break.'
    },
    {
      name: 'Joey',
      startDate: '1996-09-19',
      bio: 'Does NOT share food. Recommends that you read Little Women.'
    },
    {
      name: 'Phoebe',
      startDate: '1996-09-19',
      bio: 'Fierce protector of the bakery\'s smelly cat.'
    },
    {
      name: 'Chandler',
      startDate: '1997-09-25',
      bio: 'Thinks chewing gum is perfection. Honestly, could it BE any better?'
    },
    {
      name: 'Rachel',
      startDate: '1998-09-24',
      bio: 'Is NOT a shoe. Occasionally a fan of lobsters.'
    },
  ]

const main = async () => {
    const insertedBakers = await bakerModel.insertMany(bakersArray)
    console.log(insertedBakers)
}  

main()