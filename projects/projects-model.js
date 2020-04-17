const myKnex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: '../data/projects.db3'
  }
});

const db = require('../data/db-config');

module.exports = {
  getProjects,
  addProjects,
  getProjectById,
  updateProject,
  deleteProject
};

function getProjects() {
  return db('projects')
}

function getProjectById(id) {
  return db('projects')
    .where({
      id
    })
}

function addProjects(data) {
  return db('projects')
    .insert(data);
}

function updateProject(changes, id) {
  return db('projects')
    .update(changes)
    .where({ id })
}

function deleteProject(id) {
  return db('projects')
    .where({ id })
    .del()
}