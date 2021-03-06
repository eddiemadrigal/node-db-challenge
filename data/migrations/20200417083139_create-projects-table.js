
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('id', 255).primary();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 'longtext');
      tbl.string('completed').boolean;
    })
    .createTable('tasks', tbl => {
      tbl.string('id', 255).primary();
      tbl.string('project_id', 255)
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.string('name', 255).notNullable();
      tbl.string('description', 'text').notNullable();
      tbl.string('notes', 'text');
      tbl.string('completed').boolean;
    })
    .createTable('resources', tbl => {
      tbl.string('id', 255).primary();
      tbl.string('name', 255).notNullable();
      tbl.string('description', 'text');
    })
    .createTable('projects_resources', tbl => {
      tbl.string('project_id', 255);
      tbl.string('resource_id', 255);
    })
    .createTable('context', tbl => {
      tbl.string('id', 255).primary();
      tbl.string('name', 255).notNullable();
    })
    .createTable('context_task', tbl => {
      tbl.string('context_id', 255);
      tbl.string('task_id', 255);
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('projects_resources')
  .dropTableIfExists('projects')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('context_task')
  .dropTableIfExists('context')
};
