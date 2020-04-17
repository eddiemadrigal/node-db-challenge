const express = require('express');

const ResourcesRouter = require('./resources/resources-router');
const ProjectsRouter = require('./projects/projects-router');
const TasksRouter = require('./tasks/tasks-router');

const server = express();

server.use(express.json());

server.use('/api/resources', ResourcesRouter);
server.use('/api/projects', ProjectsRouter);
server.use('/api/tasks', TasksRouter);

server.get('/', (req, res) => {
  res.send({ message: 'API is up ...'})
});

module.exports = server;