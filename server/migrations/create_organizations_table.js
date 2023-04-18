// @ts-check

export const up = (knex) =>
  knex.schema.createTable('organization', (table) => {
    table.string('id').primary().notNullable();
    table.string('user_id').unsigned().index().references('users.id');
    table.string('name_organization')
    table.string('phone_organization')
    table.string('phone_staff')
    table.string('address')
    table.string('email')
    table.string('description')
    table.string('link_organization');
    table.string('secret_key');
    table.boolean('is_confirmed').notNullable().defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  });

export const down = (knex) => knex.schema.dropTable('organization');
