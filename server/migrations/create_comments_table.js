// @ts-check

export const up = (knex) =>
  knex.schema.createTable('comments', (table) => {
    table.string('id').primary().notNullable();
    table.string('user_id').unsigned().index().references('users.id');
    table.string('content').notNullable();
    table.boolean('is_change').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

export const down = (knex) => knex.schema.dropTable('comments');
