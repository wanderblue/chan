
exports.up = function (knex, Promise) {
  return knex.schema.createTable('content', function (table) {
    table.increments('id').primary()
    table.string('board').notNullable()
    table.string('topic').notNullable()
    table.integer('userID').notNullable()
    table.timestamps(false, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('content')
}
