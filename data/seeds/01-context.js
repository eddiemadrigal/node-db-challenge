
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('context').del()
    .then(function () {
      // Inserts seed entries
      return knex('context').insert([
        {id: 1, name: 'home'},
        {id: 2, name: 'office'},
        {id: 3, name: 'conferene'},
        {id: 4, name: 'travel'},
        {id: 5, name: 'offsite'}
      ]);
    });
};
