const express = require('express');

const Resources = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get a list of resources ...' });
    });
});

router.post('/', (req, res) => {
  Resources.addResource(req.body)
  .then(resource => {
    res.status(201).json(resource)
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to create a new resource' })
  })
});

router.get('/:id', (req, res) => {
  Resources.getResourceById(req.params.id) 
    .then(resources => {
      res.json(resources);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get the specific id' });
    });
});

module.exports = router;