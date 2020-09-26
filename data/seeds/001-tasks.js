
exports.seed = function(knex, Promise) {
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {id: 1, description: 'Write Code', completed: 'false'}
      ]);
    });
};
