// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'newuser',
    password: '',
    database: 'db_1234chan',
  // database: 'tck253fslt3p0jo8',
    debug: ['ComQueryPacket', 'RowDataPacket']
  }
}
