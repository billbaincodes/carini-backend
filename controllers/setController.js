const knex = require('../db/connection')

const getAll = (req, res, next) => {
  return knex('set')
  .orderBy('id', 'asc')
  .then(set => res.json({ set: set }))
}

const getByDate = (req, res, next) => {
  let date = req.params.date
  return knex('set')
  .where('showdate', date)
  .then(set => res.json({ setOnDate : set }))
}

const getByVenueID = (req, res, next) => {
  let venueID = req.params.venueid
  return knex('set')
    .where('venueid', venueID)
    .then(set => res.json({ setAtVenue : set }))
}

const getByRating = (req, res, next) => {
  let rating =  req.params.rating
  console.log({rating})
  return knex.raw(`SELECT * FROM set WHERE rating = '${rating}'`)
    .then(set => res.json({ set : set.rows }))
}

module.exports = {
  getAll,
  getByDate,
  getByVenueID,
  getByRating
}