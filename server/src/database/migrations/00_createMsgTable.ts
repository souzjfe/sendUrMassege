import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR TABELA
    return knex
        .schema
        .createTable('msg', table => {
            table.increments('id').primary();
            table.string('text').notNullable;
            table.string('userName').notNullable;
            table.string('hour').notNullable;
            table.string('date').notNullable;
            
            

        });
}

export async function down(knex: Knex) {
    //DELETAR TABELA
    return knex.schema.dropTable('msg');
}