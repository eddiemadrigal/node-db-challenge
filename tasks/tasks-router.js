const express = require('express');

const Projects = require('./tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get a list of tasks ...' });
    });
});

module.exports = router;