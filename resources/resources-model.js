const myKnex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: '../data/projects.db3'
  }
});

const db = require('../data/db-config');

module.exports = {
  getResources
};

function getResources() {
  return db('resources')
}