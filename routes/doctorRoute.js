const router = require('express').Router()
const {
  getDoctorByHospital,
  registerDoctor,
} = require('../controllers/doctorController')

router.route('/createDoctor').post(registerDoctor)

router.route('/findbyhospital/:id').get(getDoctorByHospital)

module.exports = router
