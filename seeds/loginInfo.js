const faker = require('faker')

const createAccount = () => ({

  userName: faker.internet.userName(),
  Password: faker.internet.password()

})

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('loginInfo').del()
    .then(function () {
      // Inserts seed entries

      const fakeUser = []
      const num = 10
      for (let i = 0; i < num; i++) {
        fakeUser.push(createAccount())
      }

      return knex('loginInfo').insert(fakeUser)
    })
}
