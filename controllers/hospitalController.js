const asyncHandler = require('express-async-handler')
const Hospital = require('../models/hospitalModel')

//@desc    Register Hospital
//@route   POST /api/hospital/createHospital
//@access  Public

const registerHospital = asyncHandler(async (req, res) => {
  let { email, name, address, number } = req.body

  const hospital = await Hospital.create({
    name,
    email,
    address,
    number,
  })

  if (hospital) {
    res.status(201).json({
      hasError: false,
      message: 'hospital created successfully',
      hospital,
    })
  } else {
    res.json({
      hasError: true,
      message: `sorry something went wrong`,
    })
  }
})

//@desc    Get Hospitals
//@route   GET /api/hospital/all
//@access  Public

const getHospitals = asyncHandler(async (req, res) => {
  const hospitals = await Hospital.find({})

  if (hospitals) {
    res.status(201).json({
      hasError: false,
      message: 'data fetched successfully',
      hospitals,
    })
  } else {
    res.json({
      hasError: true,
      message: `sorry something went wrong`,
    })
  }
})

//@desc    Find Hospital By id
//@route   Get /api/hospital/:id
//@access  Public

const getHospitalById = asyncHandler(async (req, res) => {
  const hospital = await Hospital.findById(req.params.id)

  if (hospital) {
    res.status(201).json({
      hasError: false,
      message: 'data fetched successfully',
      hospital,
    })
  } else {
    res.json({
      hasError: true,
      message: `sorry something went wrong`,
    })
  }
})

module.exports = {
  registerHospital,
  getHospitals,
  getHospitalById,
}
