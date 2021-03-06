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

router.put('/:id', (req, res) => {
  Projects.getProjectById(req.params.id)
    .then(project => {
      if(project) {
        Projects.updateProject(req.body, req.params.id)
          .then(updatedProject => {
            res.json(updatedProject)
          });
      } else {
        res.status(404).json({ message: 'Project by given id was not found' });
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to update the project.' })
    }); 
});

router.delete('/:id', (req, res) => {
  Projects.deleteProject(req.params.id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: "deleted" })
      } else {
        res.status(404).json({ message: 'Could not find the project with the specified id' })
      }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to delete the project'})
    });
});

module.exports = router;