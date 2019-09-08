
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('content').del()
    .then(function () {
      // Inserts seed entries
      return knex('content').insert([
        {
          id: 1,
          board: 'Dogs',
          topic: 'My Aussie Shepherd',
          userID: 4
        },
        {
          id: 2,
          board: 'Movies',
          topic: 'Gone with the Wind',
          userID: 2
        },
        {
          id: 3,
          board: 'food',
          topic: 'Lamb steak',
          userID: 3
        },
        {
          id: 4,
          board: 'Sports',
          topic: 'NFL draft 2019',
          userID: 1
        },
        {
          id: 5,
          board: 'Travel',
          topic: 'Iceland: another planet',
          userID: 4
        }
      ])
    })
}
