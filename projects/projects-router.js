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

router.post('/', (req, res) => {
  Projects.addProjects(req.body)
  .then(project => {
    res.status(201).json(project)
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to create a new projectt' })
  })
});

router.get('/:id', (req, res) => {
  Projects.getProjectById(req.params.id) 
    .then(projects => {
      res.json(projects);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get the specific id ...' });
    });
});

module.exports = router;