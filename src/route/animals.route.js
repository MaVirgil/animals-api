const express = require('express');
const { animalService } = require('../service/animalService');
const { StatusCodes } = require('http-status-codes');

const router = express.Router();

// GET
router.get('/', (req, res) => {
  res.send({
    data: animalService.getAll(),
  });
});

router.get('/:id', (req, res) => {
  const id = Number(req.params.id);

  res.send({
    data: animalService.getById(id),
  });
});

// POST
router.post('/', (req, res) => {
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      data: 'Cannot post with empty or missing body',
    });
  }

  const added = animalService.add(body);

  res.status(StatusCodes.CREATED).send({
    data: added,
  });
});

module.exports = router;
