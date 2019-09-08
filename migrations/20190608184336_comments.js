exports.up = function (knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('id').primary()
    table.string('board').notNullable()
    table.string('topic').notNullable()
    table.string('userName').notNullable()
    table.integer('type').notNullable()
    table.string('media')
    table.string('text', 1000)
    table.timestamps(false, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('comments')
}
