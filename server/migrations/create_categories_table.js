// @ts-check

export const up = (knex) =>
  knex.schema.createTable('categories', (table) => {
    table.string('id').primary().notNullable();
    table.string('title').notNullable();
    table.string('description').notNullable();
  });

export const down = (knex) => knex.schema.dropTable('categories');
