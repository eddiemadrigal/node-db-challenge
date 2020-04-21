
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('context_task').del()
    .then(function () {
      // Inserts seed entries
      return knex('context_task').insert([
        {context_id: '1', task_id: '1'},
        {context_id: '2', task_id: '1'},
        {context_id: '3', task_id: '1'},
        {context_id: '4', task_id: '2'},
        {context_id: '5', task_id: '2'},
        {context_id: '6', task_id: '3'},
        {context_id: '7', task_id: '3'},
        {context_id: '8', task_id: '4'}
      ]);
    });
};
