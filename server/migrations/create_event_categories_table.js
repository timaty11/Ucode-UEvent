// @ts-check

export const up = (knex) =>
  knex.schema.createTable('event_categories', (table) => {
    table.string('category_id').unsigned().index().references('categories.id');
    table.string('event_id').unsigned().index().references('events.id');
  });

export const down = (knex) => knex.schema.dropTable('event_categories');
