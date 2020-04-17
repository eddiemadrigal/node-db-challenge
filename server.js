const express = require('express');

const ResourcesRouter = require('./resources/resources-router');

const server = express();

server.use(express.json());

server.use('/api/resources', ResourcesRouter);

server.get('/', (req, res) => {
  res.send({ message: 'API is up ...'})
});

module.exports = server;