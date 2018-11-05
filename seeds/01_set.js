const dummyData = require('../dummyData.json')


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('DELETE FROM "set"; ALTER SEQUENCE set_id_seq RESTART WITH 1;')
    .then(function () {
      // Inserts seed entries
      return knex('set').insert(dummyData);
    });
};

