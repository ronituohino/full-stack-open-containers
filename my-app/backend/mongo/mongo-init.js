db.createUser({
  user: 'the_username',
  pwd: 'the_password',
  roles: [
    {
      role: 'dbOwner',
      db: 'the_database',
    },
  ],
})

db.createCollection('people')

db.people.insert({ name: 'leksa', number: '1234567890' })
db.people.insert({ name: 'jare', number: '05088820394' })
