exports.up = function(knex, Promise) {
  return knex.schema.createTable('links', table => {
    table.increments('id').primary()
    table.text('title')
    table.text('description')
    table.text('url')
    table.specificType('stringarray', 'text ARRAY')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('links')
};
