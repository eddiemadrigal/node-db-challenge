const express = require('express');

const Projects = require('./resources-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get resources ...' });
    });
});

module.exports = router;