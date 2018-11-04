const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const cors = require('cors')
const setRoutes = require('./routes/setRoutes')


//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())


//routes
app.get('/', (req, res) => {
  res.json('🍄')
})


app.use('/set', setRoutes)


//error handling
app.use(notFound)
app.use(errorHandler)

function notFound(err, req, res, next) {
  res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({
      error: err.message,
      stack,
    url: req.originalUrl 
  })
}

//listener
app.listen(port, () => {console.log(`Up on port${port}`)})