// @ts-check

export const up = (knex) =>
  knex.schema.createTable('organizer_subscriptions', (table) => {
    table.string('user_id').unsigned().index().references('users.id');
    table
      .string('organization_id')
      .unsigned()
      .index()
      .references('organization.id');
  });

export const down = (knex) => knex.schema.dropTable('subscribe_events');
