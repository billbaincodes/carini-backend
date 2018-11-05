const express = require('express')
const router = express.Router()
const controller = require('../controllers/setController')


router.get('/', controller.getAll)
router.get('/date/:date', controller.getByDate)
router.get('/venueid/:venueid', controller.getByVenueID)
router.get('/rating/:rating', controller.getByRating)


module.exports = router