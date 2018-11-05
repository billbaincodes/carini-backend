
exports.up = function(knex, Promise) {

  return knex.schema.createTable('set', function (table) {
    table.increments()
    table.integer('showid')
    table.string('showdate')
    table.string('short_date')
    table.string('long_date')
    table.string('relative_date')
    table.string('url')
    table.string('gapchart')
    table.string('artist')
    table.integer('artistid')
    table.integer('venueid')
    table.string('venue')
    table.string('location')
    table.string('setlistdata', 5000)
    table.string('setlistnotes', 1000)
    table.string('rating')
  })

}

exports.down = function(knex, Promise) {
  
  return knex.schema.dropTableIfExists('set')

};
