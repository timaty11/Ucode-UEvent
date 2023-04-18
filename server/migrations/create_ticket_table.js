// @ts-check

export const up = (knex) =>
  knex.schema.createTable('tickets', (table) => {
    table.string('id').primary().notNullable();
    table.string('event_id').unsigned().index().references('events.id');
    table.decimal('price').notNullable();
    table.boolean('is_sold').notNullable().defaultTo(false);
    table.string('payment_intent');
  });

export const down = (knex) => knex.schema.dropTable('tickets');
