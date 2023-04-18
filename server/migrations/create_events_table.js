// @ts-check

export const up = (knex) =>
  knex.schema.createTable('events', (table) => {
    table.string('id').primary().notNullable();
    table.string('user_id').unsigned().index().references('users.id');
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.string('city').notNullable();
    table.string('address').notNullable();
    table.string('poster');
    table.timestamp('event_start').notNullable();
    table.timestamp('event_end').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

export const down = (knex) => knex.schema.dropTable('events');
