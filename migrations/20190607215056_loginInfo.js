exports.up = function (knex, Promise) {
  return knex.schema.createTable('loginInfo', function (table) {
    table.increments('id').primary()
    table.string('userName').notNullable()
    table.string('password').notNullable()
    table.timestamps(false, true)
  })
}
exports.down = function (knex, Promise) {
  return knex.schema
    .dropTable('loginInfo')
}
