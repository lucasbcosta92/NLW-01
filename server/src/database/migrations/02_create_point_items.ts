import Knex from 'knex';

// Criação
export async function up(knex: Knex){
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();
    // chave estrangeira
    table.integer('point_id').notNullable().references('id').inTable('points'); 
    table.integer('item_id').notNullable().references('id').inTable('items');
  });
}

// Roolback
export async function down(knex: Knex){
  return knex.schema.dropTable('piont_items')
}