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
    res.status(500).json({ message: 'Failed to create a new task ...' })
  })
});

router.get('/:id', (req, res) => {
  Tasks.getTaskById(req.params.id)
    .then(tasks => {
      res.json(tasks);
    })
    .catch( error => {
      res.status(500).json({ message: 'Failed to get the specific task ...' });
    });
});

router.put('/:id', (req, res) => {
  Tasks.getTaskById(req.params.id)
    .then(task => {
      if(task) {
        Tasks.updateTask(req.body, req.params.id)
          .then(updatedTask => {
            res.json(updatedTask)
          });
      } else {
        res.status(404).json({ message: 'Task by given id was not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to update the task.' })
    }); 
});

router.delete('/:id', (req, res) => {
  Tasks.deleteTask(req.params.id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: "deleted" })
      } else {
        res.status(404).json({ message: 'Could not find the task with the specified id' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to delete the task'})
    });
});

module.exports = router;