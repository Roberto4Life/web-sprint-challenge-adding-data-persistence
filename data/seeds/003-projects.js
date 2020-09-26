
exports.seed = function(knex) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {id: 1, name: 'DevSprint', description: 'Working on the Sprint', completed: 'false', resources_id: 1, tasks_id: 1}
      ]);
    });
};
