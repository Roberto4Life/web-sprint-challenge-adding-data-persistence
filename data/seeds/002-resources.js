
exports.seed = function(knex, Promise) {
  return knex('resources').truncate()
    .then(function () {
      return knex('resources').insert([
        {id: 1, name: 'Computer', description: 'Knowledge'}
      ]);
    });
};
