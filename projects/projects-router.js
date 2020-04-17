const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getProjects() 
    .then(projects => {
      res.json(projects);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get a list of projects ...' });
    });
});

module.exports = router;