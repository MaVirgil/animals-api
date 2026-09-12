const express = require('express');
const animalService = require('../service/animalService');
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

  return res.status(StatusCodes.CREATED).send({
    data: added,
  });
});

// PUT
router.put('/:id', (req, res) => {
  const body = req.body;
  const id = Number(req.params.id);

  if (!body || Object.keys(body).length === 0) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      data: 'Cannot post with empty or missing body',
    });
  }

  const created = animalService.replace(id, body);

  if (!created) {
    return res.status(StatusCodes.NOT_FOUND).send({
      data: `Cannot find animal with id: ${id}`,
    });
  }

  return res.status(StatusCodes.OK).send({
    data: created,
  });
});

// PATCH
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id);
  const body = req.body;

  if (!body || Object.keys(body).length === 0) {
    return res.status(StatusCodes.BAD_REQUEST).send({
      data: 'Cannot patch with empty or missing body',
    });
  }

  const edited = animalService.edit(id, body);

  if (!edited) {
    return res.status(StatusCodes.NOT_FOUND).send({
      data: `Cannot find animal with id: ${id}`,
    });
  }

  return res.status(StatusCodes.OK).send({
    data: edited,
  });
});

// DELETE
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);

  const deleted = animalService.delete(id);

  if(!deleted) {
    return res.status(StatusCodes.NOT_FOUND).send({
      data: `Cannot find animal with id: ${id}`
    });
  }

  return res.status(StatusCodes.OK).send({
    data: deleted,
  });
});

module.exports = router;
