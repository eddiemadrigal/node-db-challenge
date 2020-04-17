
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, name: 'task 1', project_id: '1', description: 'description of task 1', notes: 'notes belonging to task 1', completed: false},
        {id: 2, name: 'task 2', project_id: '1', description: 'description of task 2', notes: 'notes belonging to task 2', completed: false},
        {id: 3, name: 'task 3', project_id: '2', description: 'description of task 3', notes: 'notes belonging to task 3', completed: false},
        {id: 4, name: 'task 4', project_id: '2', description: 'description of task 4', notes: 'notes belonging to task 4', completed: false},
        {id: 5, name: 'task 5', project_id: '3', description: 'description of task 5', notes: 'notes belonging to task 5', completed: false},
      ]);
    });
};
