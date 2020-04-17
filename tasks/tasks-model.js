const myKnex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: '../data/projects.db3'
  }
});

const db = require('../data/db-config');

module.exports = {
  getTasks,
  addTask
};

function getTasks() {
  return db('tasks')
}

function addTask(data) {
  return db('tasks')
    .insert(data)
}