import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR TABELA
    return knex
        .schema
        .createTable('usr', table => {
            table.increments('id').primary();
            table.string('name').notNullable;
        });
}

export async function down(knex: Knex) {
    //DELETAR TABELA
    return knex.schema.dropTable('usr');
}