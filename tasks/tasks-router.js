const express = require('express');

const Tasks = require('./tasks-model');

const router = express.Router();

router.get('/', (req, res) => {
  Tasks.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get a list of tasks ...' });
    });
});

router.post('/', (req, res) => {
  Tasks.addTask(req.body)
  .then(tasks => {
    res.status(201).json(tasks)
  })
  .catch(error => {
    res.status(500).json({ message: 'Failed to create a new task' })
  })
});

module.exports = router;