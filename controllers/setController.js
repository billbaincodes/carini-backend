// const knex = require('../db/connection')

const getAll = (req, res, next) => {
  // res.json('random set goes here')
  return knex('set')
  .orderBy('id', 'asc')
  .then(set => res.json({set: set}))
}


module.exports = {
  getAll
}