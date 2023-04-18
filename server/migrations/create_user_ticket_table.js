// @ts-check

export const up = (knex) =>
  knex.schema.createTable('user_tickets', (table) => {
    table.string('ticket_id').unsigned().index().references('tickets.id');
    table.string('user_id').unsigned().index().references('users.id');
  });

export const down = (knex) => knex.schema.dropTable('user_tickets');
