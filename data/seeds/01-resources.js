
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'computer', description: 'description of computer'},
        {id: 2, name: 'conference room', description: 'description of conference room'},
        {id: 3, name: 'microphone', description: 'description of microphone'},
        {id: 4, name: 'delivery van', description: 'description of van'}
      ]);
    });
};
