const router = require('express').Router()
const {
  Book,
  getDoctorAppointment,
} = require('../controllers/appointmentController')

router.route('/book').post(Book)
router.route('/doctor/:id').get(getDoctorAppointment)

module.exports = router
