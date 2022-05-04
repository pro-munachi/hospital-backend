const router = require('express').Router()
const {
  getDoctorByHospital,
  registerDoctor,
  getDoctorById,
} = require('../controllers/doctorController')

router.route('/createDoctor').post(registerDoctor)

router.route('/findbyhospital/:id').get(getDoctorByHospital)

router.route('/:id').get(getDoctorById)

module.exports = router
