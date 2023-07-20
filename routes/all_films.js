const express = require('express');
const router = express.Router()
const Model = require('../models/model')

module.exports = router;

router.post('/', (req, res) => {
    res.send('EMpty')
})

//Post Method
router.post('/post', async (req, res) => {
//    res.send('Post API')
  const data = new Model({
    title: "Barbenheimer 2",
    year: "2026"
  })

  try {
    const data_to_save = await data.save();
    res.status(200).json(data_to_save)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

//Get all Method
router.get('/getAll', async (req, res) => {
//    res.send('Get All API')
  try {
    const data = await Model.find();
    res.json(data)
  } catch(error){
    res.status(500).json({message: error.message})

  }
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
