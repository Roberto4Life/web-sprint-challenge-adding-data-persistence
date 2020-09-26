const { toNamespacedPath } = require("path");

exports.up = function (knex) {
    return (
        knex.schema
            .createTable('tasks', tbl => {
                tbl.increments();
                tbl.string('description', 255).notNullable();
                tbl.string('notes', 255).nullable();
                tbl.boolean('completed').defaultTo(false).notNullable();
            })
            .createTable('resources', tbl => {
                tbl.increments();
                tbl.string('name', 255).notNullable();
                tbl.string('description', 255).nullable();
            })
            .createTable('projects', tbl => {
                tbl.increments();
                tbl.string('name', 255).notNullable();
                tbl.string('description', 255).nullable();
                tbl.boolean('completed').defaultTo(false).notNullable();
                tbl.integer('resources_id')
                    .unsigned()
                    .notNullable()
                    .references('resources.id')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
                tbl.integer('tasks_id')
                    .unsigned()
                    .notNullable()
                    .references('tasks.id')
                    .onDelete('CASCADE')
                    .onUpdate('CASCADE');
            })

    )
};

exports.down = function (knex) {
    return (
        knex.schema
            .dropTableIfExists('projects')
            .dropTableIfExists('resources')
            .dropTableIfExists('tasks')
    );
};
