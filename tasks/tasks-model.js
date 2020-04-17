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
  updateTask,
  deleteTask,
  getTaskContext
};

function getTasks() {
  return db('tasks')
} fi

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

/*

select c.name
from context c
join context_task ct on ct.context_id = c.id
join tasks t on t.id = ct.task_id
where t.id = 2

*/

function getTaskContext(id) {

}l

function updateTask(changes, id) {
  return db('tasks')
    .update(changes)
    .where({ id })
}

function deleteTask(id) {
  return db('tasks')
    .where({ id })
    .del()
}