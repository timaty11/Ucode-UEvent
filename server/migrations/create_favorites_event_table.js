// @ts-check

export const up = (knex) =>
  knex.schema.createTable('favorites_event', (table) => {
    table.string('user_id').unsigned().index().references('users.id');
    table.string('event_id').unsigned().index().references('events.id');
  });

export const down = (knex) => knex.schema.dropTable('favorites_event');
