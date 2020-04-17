const myKnex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: '../data/projects.db3'
  }
});

const db = require('../data/db-config');

module.exports = {
  getTasks,
  addTask,
  getTaskById,
  updateTask
};

function getTasks() {
  return db('tasks')
}

function addTask(data) {
  return db('tasks')
    .insert(data)
}

function getTaskById(id) {
  return db('tasks')
    .where({
      id
    })
}

function updateTask(changes, id) {
  return db('tasks')
    .update(changes)
    .where({ id })
}