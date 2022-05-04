const router = require('express').Router()
const {
  registerHospital,
  getHospitals,
  getHospitalById,
} = require('../controllers/hospitalController')

router.route('/createHospital').post(registerHospital)

router.route('/all').get(getHospitals)

router.route('/:id').get(getHospitalById)

module.exports = router
