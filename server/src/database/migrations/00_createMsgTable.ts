import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR TABELA
    return knex
        .schema
        .createTable('msg', table => {
            table.increments('id').primary();
            table.string('texto').notNullable;
            table.string('userName').notNullable;
            

        });
}

export async function down(knex: Knex) {
    //DELETAR TABELA
    return knex.schema.dropTable('msg');
}