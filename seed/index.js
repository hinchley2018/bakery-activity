// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT

// MONGOOSE
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log(`connected to MongoDB at ${process.env.MONGO_URI}`)
})

const bakerModel = require('../models/baker')
const breadModel = require('../models/bread')

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

const breadsArray = [
  {
    name: 'Rye',
    hasGluten: true,
    image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    baker: "Ross"
  },
  {
    name: 'French',
    hasGluten: true,
     image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    baker: "Rachel"
  },
  {
    name: 'Gluten-Free',
    hasGluten: false,
    image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    baker: "Phoebe"
  },
  {
    name: 'Vegan Chocolate Muffin',
    hasGluten: false,
    image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    baker: "Phoebe"
  },
  {
    name: 'Pumpernickel',
    hasGluten: true,
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    baker: "Monica"
  },
  {
    name: 'Wonder Bread',
    hasGluten: true,
    image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
    baker: "Joey"
  },
]

const main = async () => {
  await bakerModel.deleteMany()
  await breadModel.deleteMany()

  const insertedBakers = await bakerModel.insertMany(bakersArray)
  console.log(insertedBakers)
  const insertedBreads = await Promise.all(breadsArray.map(async bread => {
    const baker = await bakerModel.findOne({name: bread.baker})
    bread.baker = baker
    return await breadModel.create(bread)
  }))
  console.log(insertedBreads)
  process.exit()
}  

main()