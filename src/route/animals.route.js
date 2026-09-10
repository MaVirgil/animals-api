const express = require('express');
const { animalService } = require('../service/animalService')

const router = express.Router();

//GET
router.get('/', (req, res) => {
  res.send({
    data: animalService.getAll()
  });
})

router.get('/:id', (req, res) => {
  const idQuery = req.params["id"];

  res.send({
    data: animalService.getById(idQuery)
  });
})

module.exports = router