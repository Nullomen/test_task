/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = async function(knex) {
    try {
        await knex.schema.createTable('cities', function (table) {
            table.integer('id').primary().notNullable();
            table.string('name').notNullable();
            table.integer('data').notNullable();
        });
        return await knex.schema.createTable('citizens', function (table) {
            table.increments('id').primary();
            table.integer('city_id').notNullable().references('id').inTable('cities');
            table.string('name').notNullable();
            table.string('city').notNullable();
            table.string('district').notNullable();
            table.string('street').notNullable();
        });
    } catch(e){
        console.error(`ERROR UP MIGRATION create tables: ${e}`);
    }
};

exports.down = async function(knex) {
    try {
        await knex.schema.dropTable('citizens');
        return await knex.schema.dropTable('cities');
    } catch(e){
        console.error(`ERROR DOWN MIGRATION create tables: ${e}`);
    }
};