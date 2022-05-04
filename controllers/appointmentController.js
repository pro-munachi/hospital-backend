const asyncHandler = require('express-async-handler')
const Doctor = require('../models/doctorModel')
const moment = require('moment')
const Appointment = require('../models/appointmentModel')
const Hospital = require('../models/hospitalModel')

//@desc    Book An Appointment
//@route   POST /api/appointment/book
//@access  Public

const Book = asyncHandler(async (req, res) => {
  let { email, name, hospitalId, number, illness, image, doctorId, time } =
    req.body

  if (time) {
    const appoint = await Appointment.find({ doctorId })

    const doctor = await Doctor.findById(doctorId)
    const hospital = await Hospital.findById(hospitalId)

    for (let i = 0; i < appoint.length; i++) {
      if (appoint[i].time === time) {
        res.json({
          hasError: true,
          message: `${doctor.name} is already booked for the time`,
        })
        return
      }
    }

    const book = await Appointment.create({
      name,
      email,
      hospitalId,
      doctorId,
      number,
      illness,
      image,
      time,
      doctor: doctor.name,
      hospital: hospital.name,
    })

    if (book) {
      res.status(201).json({
        hasError: false,
        message: 'hospital created successfully',
        book,
      })
    } else {
      res.json({
        hasError: true,
        message: `sorry something went wrong`,
      })
    }
  }
})

//@desc    Find Doctor's Appointment
//@route   Get /api/appointment/doctor/:id
//@access  Public

const getDoctorAppointment = asyncHandler(async (req, res) => {
  const doctor = await Appointment.find({ doctorId: req.params.id })

  if (doctor) {
    res.status(201).json({
      hasError: false,
      message: 'data fetched successfully',
      doctor,
    })
  } else {
    res.json({
      hasError: true,
      message: 'sorry something went wrong',
    })
  }
})

module.exports = {
  Book,
  getDoctorAppointment,
}
