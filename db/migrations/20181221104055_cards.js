
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table=>{
    table.increments();
    table.string('name');
    table.string('img_url');
    table.text('description')
    table.integer('mana');
    table.integer('health');
    table.integer('attack')
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('cards')
};
