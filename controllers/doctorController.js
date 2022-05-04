const asyncHandler = require('express-async-handler')
const Doctor = require('../models/doctorModel')

//@desc    Register Doctor
//@route   POST /api/doctor/createDoctor
//@access  Public

const registerDoctor = asyncHandler(async (req, res) => {
  let { email, name, hospitalId, number, specialty, image, sex } = req.body

  const doctor = await Doctor.create({
    name,
    email,
    hospitalId,
    number,
    specialty,
    image,
    sex,
  })

  if (doctor) {
    res.status(201).json({
      hasError: false,
      message: 'hospital created successfully',
      doctor,
    })
  } else {
    res.json({
      hasError: true,
      message: `sorry something went wrong`,
    })
  }
})

//@desc    Find Doctor By Hospital
//@route   Get /api/doctor/findbyhospital
//@access  Public

const getDoctorByHospital = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({ hospitalId: req.params.id })

  if (doctors) {
    res.status(201).json({
      hasError: false,
      message: 'data fetched successfully',
      doctors,
    })
  } else {
    res.json({
      hasError: true,
      message: `sorry something went wrong`,
    })
  }
})

module.exports = {
  registerDoctor,
  getDoctorByHospital,
}
