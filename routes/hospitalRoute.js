const router = require('express').Router()
const {
  registerHospital,
  getHospitals,
} = require('../controllers/hospitalController')

router.route('/createHospital').post(registerHospital)

router.route('/all').get(getHospitals)

module.exports = router
